/*************************************************************************
 * Project: Dot Map
 * Copyright: Shropshire Council (c) 2007
 * Purpose: 
 * $Author: $
 * $Date: 2009-12-10 11:02:25 +0000 (Thu, 10 Dec 2009) $
 * $Revision: 92 $
 * $HeadURL: https://sbp.svn.cloudforge.com/naturalshropshire/trunk/DNN/DesktopModules/SCC.DotMap/DotMapSettings.ascx.cs $
 ************************************************************************/
using System;
using System.Web.UI;
using DotNetNuke.Entities.Modules;
using DotNetNuke.Services.Exceptions;
using SCC.Modules.DotMap.Data;

namespace SCC.Modules.DotMap
{
    /// -----------------------------------------------------------------------------
    /// <summary>
    /// The Settings class manages Module Settings
    /// </summary>
    /// <remarks>
    /// </remarks>
    /// <history>
    /// </history>
    /// -----------------------------------------------------------------------------
    partial class DotMapSettings : ModuleSettingsBase
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            //Do nothing.
        }       

        #region Base Method Implementations



        /// <summary>
        /// LoadSettings loads the settings from the Database and displays them
        /// </summary>
        public override void LoadSettings()
        {
            try
            {
                if (Page.IsPostBack == false)
                {
                    MapSettings.LoadSettings(this.Settings);
                    this.txtCutOffDate.Text = (string)this.Settings[SettingsKeys.CUTOFF];
                    this.txtNumberOfRows.Text = (string)this.Settings[SettingsKeys.ROWS];
                }
            }
            catch (Exception exc)
            {
                Exceptions.ProcessModuleLoadException(this, exc);
            }
        }

        /// <summary>
        /// UpdateSettings saves the modified settings to the Database
        /// </summary>
        public override void UpdateSettings()
        {
            try
            {
                MapSettings.UpdateSettings(this.ModuleId);
                ModuleController objModules = new ModuleController();
                objModules.UpdateModuleSetting(this.ModuleId, SettingsKeys.CUTOFF, this.txtCutOffDate.Text);
                objModules.UpdateModuleSetting(this.ModuleId, SettingsKeys.ROWS, this.txtNumberOfRows.Text);
            }
            catch (Exception exc)//Module failed to load
            {
                Exceptions.ProcessModuleLoadException(this, exc);
            }
        }

        #endregion
    }
}


