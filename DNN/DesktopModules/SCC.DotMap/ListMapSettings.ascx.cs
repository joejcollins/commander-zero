/*************************************************************************
 * Project: Dot Map
 * Copyright: Shropshire Council (c) 2007
 * Purpose: 
 * $Author: $
 * $Date: 2009-12-10 11:02:25 +0000 (Thu, 10 Dec 2009) $
 * $Revision: 92 $
 * $HeadURL: https://sbp.svn.cloudforge.com/naturalshropshire/trunk/DNN/DesktopModules/SCC.DotMap/ListMapSettings.ascx.cs $
 ************************************************************************/

using System;
using System.Web.UI;
using DotNetNuke.Entities.Modules;
using DotNetNuke.Services.Exceptions;

namespace SCC.Modules.DotMap
{
    /// <summary>
    /// 
    /// </summary>
    partial class ListMapSettings : ModuleSettingsBase
    {

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
                    MapSettings.LoadSettings(Settings);
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
                MapSettings.UpdateSettings(ModuleId);
            }
            catch (Exception exc)//Module failed to load
            {
                Exceptions.ProcessModuleLoadException(this, exc);
            }
        }

        #endregion

    }
}


