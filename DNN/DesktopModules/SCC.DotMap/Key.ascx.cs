/*************************************************************************
* Project: Dot Map
* Copyright: Shropshire Council (c) 2007
* Purpose: Provide a key to the map, for any items that appear on the map.
*   So for example if the outline is on, then a little picture and bit of 
*   text will show next to the map.
* $Author: $
* $Date: 2009-12-10 11:02:25 +0000 (Thu, 10 Dec 2009) $
* $Revision: 92 $
* $HeadURL: https://sbp.svn.cloudforge.com/naturalshropshire/trunk/DNN/DesktopModules/SCC.DotMap/Key.ascx.cs $
************************************************************************/
using System;
using System.Web.UI;
using DotNetNuke.Entities.Modules;
using SCC.Modules.DotMap.Data;

namespace SCC.Modules.DotMap
{
    public partial class Key : UserControl
    {
        /// <summary>
        /// Depending on whether there is a date set and if there is
        /// a grid or an outline then hide or reveal the relevant parts
        /// of the key.
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void Page_Load(object sender, EventArgs e)
        {
            if (this.Page.IsPostBack == false)
            {
                if (this.Grid == true) this.pnlGrid.Visible = true;
                if (this.CutOffYear <= 0)//there is a date set or no date
                {
                    if (this.CutOffYear == 0)//no date set
                    {
                        this.pnlNoDate.Visible = true;
                    }
                    else//no date because this is ListMap not DotMap
                    {
                        this.pnlNoDate.Visible = false;
                    }
                }
                else//a date has been set
                {
                   this.pnlBefore.Visible = true;                    
                   this.pnlAfter.Visible = true;
                }
            }
        }

        /// <summary>
        /// The render happens just after the localization, so it is a good
        /// time to add dates to the before and after text.  It is also important 
        /// to call the base.Render method so it all gets rendered.
        /// </summary>
        /// <param name="output"></param>
        protected override void Render(HtmlTextWriter output)
        {
            if (this.CutOffYear > 0)//there is a date
            {
                int after = this.CutOffYear;
                int before = after - 1;
                this.lblBefore.Text += (" " + before.ToString());
                this.lblAfter.Text += (" " + after.ToString());
            }
            base.Render(output);//Nothing happens if you don't do this.
        }

        #region "Private Properties"

        private bool Outline
        {
            get
            {
                const bool DEFAULT = false;
                PortalModuleBase parent = GetModuleUserControl(this);
                if (parent.Settings[SettingsKeys.OUTLINE] != null)
                {
                    if (parent.Settings[SettingsKeys.OUTLINE].ToString() != "")
                    {
                        return Convert.ToBoolean(parent.Settings[SettingsKeys.OUTLINE]);
                    }
                    return DEFAULT;
                }
                else
                {
                    return DEFAULT;
                }

            }
        }

        private bool Grid
        {
            get
            {
                const bool DEFAULT = false;
                PortalModuleBase parent = GetModuleUserControl(this);
                if (parent.Settings[SettingsKeys.GRID] != null)
                {
                    if (parent.Settings[SettingsKeys.GRID].ToString() != "")
                    {
                        return Convert.ToBoolean(parent.Settings[SettingsKeys.GRID]);
                    }
                    return DEFAULT;
                }
                else
                {
                    return DEFAULT;
                }

            }
        }

        /// <summary>
        /// 
        /// </summary>
        private int CutOffYear
        {
            get
            {
                PortalModuleBase parent = GetModuleUserControl(this);
                int CutOffYear = 0;//no date has been set
                if (parent.Settings[SettingsKeys.CUTOFF] != null)
                {
                    if (parent.Settings[SettingsKeys.CUTOFF].ToString() != "")
                    {
                        CutOffYear = Convert.ToInt16(parent.Settings[SettingsKeys.CUTOFF]);
                    }
                }
                else//setting is null so date cannot even be set
                {
                    CutOffYear = -1;//no date at all 
                }
                return CutOffYear;
            }
        }


        /// <summary>
        /// 
        /// </summary>
        /// <param name="control"></param>
        /// <returns></returns>
        protected PortalModuleBase GetModuleUserControl(Control control)
        {
            PortalModuleBase portalModuleBase = null;
            if (control.Parent is PortalModuleBase)
            {
                portalModuleBase = (PortalModuleBase)control.Parent;
            }
            else
            {
                portalModuleBase = (PortalModuleBase)GetModuleUserControl(control.Parent);
            }
            return portalModuleBase;
        }
        
        #endregion
    }
}