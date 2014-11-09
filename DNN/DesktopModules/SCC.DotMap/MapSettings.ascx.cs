/*************************************************************************
 * Project: Dot Map
 * Copyright: Shropshire Council (c) 2007
 * Purpose: The DotMap and ListMap use the same Map.ascx so they need 
 *   the same settings.  This control provides the settings for both.
 * $Author: $
 * $Date: 2009-12-10 11:02:25 +0000 (Thu, 10 Dec 2009) $
 * $Revision: 92 $
 * $HeadURL: https://sbp.svn.cloudforge.com/naturalshropshire/trunk/DNN/DesktopModules/SCC.DotMap/MapSettings.ascx.cs $
 ************************************************************************/
using System;
using DotNetNuke.Entities.Modules;
using System.Collections;
using SCC.Modules.DotMap.Data;

namespace SCC.Modules.DotMap
{
    public partial class MapSettings : System.Web.UI.UserControl
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            //Do nothing.
        }

        /// <summary>
        /// Load the settings into the fields on the page.  Using the cast like
        /// this rather than ToString() copes with the situation where the settings
        /// HashTable doesn't contain anything.
        /// </summary>
        /// <param name="settings"></param>
        public void LoadSettings(Hashtable settings)
        {
            this.txtGoogleKey.Text = (string)settings[SettingsKeys.GOOGLEKEY];
            this.txtMapWidth.Text = (string)settings[SettingsKeys.WIDTH];
            this.txtMapHeight.Text = (string)settings[SettingsKeys.HEIGHT];
            this.txtMapCenterX.Text = (string)settings[SettingsKeys.X];
            this.txtMapCenterY.Text = (string)settings[SettingsKeys.Y];
            string zoom = (string)settings[SettingsKeys.ZOOM];
            if (String.IsNullOrEmpty(zoom))
            {
                this.ddlMapZoom.SelectedValue = "9";
            }
            else
            {
                this.ddlMapZoom.SelectedValue = zoom;
            }
            this.ctlOutlineURL.Url = Convert.ToString(settings[SettingsKeys.OUTLINE]);
            this.chkGrid.Checked = Convert.ToBoolean(settings[SettingsKeys.GRID]);
        }

        /// <summary>
        /// Update the stored settings.
        /// </summary>
        /// <param name="moduleId"></param>
        public void UpdateSettings(int moduleId)
        {
            ModuleController objModules = new ModuleController();
            objModules.UpdateModuleSetting(moduleId, SettingsKeys.GOOGLEKEY, this.txtGoogleKey.Text);
            objModules.UpdateModuleSetting(moduleId, SettingsKeys.WIDTH, this.txtMapWidth.Text);
            objModules.UpdateModuleSetting(moduleId, SettingsKeys.HEIGHT, this.txtMapHeight.Text);
            objModules.UpdateModuleSetting(moduleId, SettingsKeys.X, this.txtMapCenterX.Text);
            objModules.UpdateModuleSetting(moduleId, SettingsKeys.Y, this.txtMapCenterY.Text);
            objModules.UpdateModuleSetting(moduleId, SettingsKeys.ZOOM, this.ddlMapZoom.SelectedValue);
            //objModules.UpdateModuleSetting(moduleId, SettingsKeys.OUTLINE, this.txtOutline.Text);
            objModules.UpdateModuleSetting(moduleId, SettingsKeys.OUTLINE, this.ctlOutlineURL.Url);
            objModules.UpdateModuleSetting(moduleId, SettingsKeys.GRID, this.chkGrid.Checked.ToString());
        }
    }
}