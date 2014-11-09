/*************************************************************************
 * Project: Dot Map
 * Copyright: Shropshire Council (c) 2007
 * Purpose: Show a map of the county.
 * $Author: $
 * $Date: 2009-12-10 11:02:25 +0000 (Thu, 10 Dec 2009) $
 * $Revision: 92 $
 * $HeadURL: https://sbp.svn.cloudforge.com/naturalshropshire/trunk/DNN/DesktopModules/SCC.DotMap/ListMapView.ascx.cs $
 ************************************************************************/
using System;
using DotNetNuke.Entities.Modules;
using DotNetNuke.Entities.Modules.Actions;
using DotNetNuke.Security;
using DotNetNuke.Services.Exceptions;
using DotNetNuke.Services.Localization;

namespace SCC.Modules.DotMap
{
    /// <summary>
    /// The ViewDotMap class displays the content
    /// </summary>
    partial class ViewDotMap : PortalModuleBase, IActionable
    {
        #region Public Methods

        public bool DisplayAudit()
        {
            bool retValue = false;

            if ((string)Settings["auditinfo"] == "Y")
            {
                retValue = true;
            }

            return retValue;
        }

        #endregion

        #region Event Handlers

        ///<summary>
        /// Page_Load runs when the control is loaded
        ///</summary>
        protected void Page_Load(System.Object sender, System.EventArgs e)
        {
            if (Request.QueryString["gr"] != null) // Show the map zoomed into a tetrad (ln = Tetrad)
            {
                try
                {
                    string Tetrad = Request.QueryString["t"].ToString();
                    //set something on the map control to get it to 
 
                }
                catch (Exception exc) //Module failed to load, oh shit.
                {
                    Exceptions.ProcessModuleLoadException(this, exc);
                }
            }
        }


        #endregion

        #region Optional Interfaces

        /// <summary>
        /// Registers the module actions required for interfacing with the portal framework
        /// </summary>
        public ModuleActionCollection ModuleActions
        {
            get
            {
                ModuleActionCollection Actions = new ModuleActionCollection();
                Actions.Add(this.GetNextActionID(), Localization.GetString(ModuleActionType.AddContent, this.LocalResourceFile), ModuleActionType.AddContent, "", "", this.EditUrl(), false, SecurityAccessLevel.Edit, true, false);
                return Actions;
            }
        }

        #endregion
    }
}

