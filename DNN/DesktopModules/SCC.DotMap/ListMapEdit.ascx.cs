/*************************************************************************
 * Project: Dot Map
 * Copyright: Shropshire Council (c) 2007
 * Purpose: 
 * $Author: $
 * $Date: 2009-12-10 11:02:25 +0000 (Thu, 10 Dec 2009) $
 * $Revision: 92 $
 * $HeadURL: https://sbp.svn.cloudforge.com/naturalshropshire/trunk/DNN/DesktopModules/SCC.DotMap/ListMapEdit.ascx.cs $
 ************************************************************************/

using System;
using System.Text;
using DotNetNuke.Common;
using DotNetNuke.Entities.Modules;

namespace SCC.Modules.DotMap
{
    /// -----------------------------------------------------------------------------
    /// <summary>
    /// The EditDotMap class is used to manage content
    /// </summary>
    /// <remarks>
    /// </remarks>
    /// <history>
    /// </history>
    /// -----------------------------------------------------------------------------
    partial class ListMapEdit : PortalModuleBase
    {

    #region Event Handlers

        /// -----------------------------------------------------------------------------
        /// <summary>
        /// Page_Load runs when the control is loaded
        /// </summary>
        /// <remarks>
        /// </remarks>
        /// <history>
        /// </history>
        /// -----------------------------------------------------------------------------
        protected void Page_Load(System.Object sender, System.EventArgs e)
        {
            StringBuilder builder = new StringBuilder();
            builder.Append("test");
            this.lblSpeciesLists.Text = builder.ToString();
        }

        protected void cmdCancel_Click(object sender, System.EventArgs e)
        {
            Response.Redirect(Globals.NavigateURL(), true);
        }		
 

        protected void cmdReturn_Click(object sender, EventArgs e)
        {
            Response.Redirect(Globals.NavigateURL(), true);
        }

        protected void cmdUpload_Click(object sender, EventArgs e)
        {

        }
}
    #endregion
}

