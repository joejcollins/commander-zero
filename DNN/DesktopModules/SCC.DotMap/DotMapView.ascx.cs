/*************************************************************************
 * Project: Dot Map
 * Copyright: Shropshire Council (c) 2007
 * Purpose: Shows the list of species for the recording group, or a tetrad 
 *   map for a particular species. 
 * $Author: $
 * $Date: 2009-12-10 11:02:25 +0000 (Thu, 10 Dec 2009) $
 * $Revision: 92 $
 * $HeadURL: https://sbp.svn.cloudforge.com/naturalshropshire/trunk/DNN/DesktopModules/SCC.DotMap/DotMapView.ascx.cs $
 ************************************************************************/
using System;
using System.Web.UI.WebControls;
using DotNetNuke.Common;
using DotNetNuke.Entities.Modules;
using DotNetNuke.Entities.Modules.Actions;
using DotNetNuke.Framework;
using DotNetNuke.Security;
using DotNetNuke.Services.Exceptions;
using DotNetNuke.Services.Localization;
using SCC.Modules.DotMap.Data;

namespace SCC.Modules.DotMap
{
    /// <summary>
    /// The DotMapView class displays the content
    /// </summary>
    partial class DotMapView : PortalModuleBase, IActionable
    {
        #region Public Methods

        public bool DisplayAudit()
        {
            bool retValue = false;

            if ((string) Settings["auditinfo"] == "Y")
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
            if (!this.Page.IsPostBack)// Then just show the list of species
            {
                try
                {
                    DotMapController objDotMaps = new DotMapController();
                    if (!this.Page.IsPostBack)
                    {
                        //If editing then show the delete column.
                        if (IsEditable)
                        {
                            this.grdResults.Columns[0].Visible = true;
                        }
                        this.grdResults.PageSize = this.NumberOfRows;
                        this.BindGrid();
                    }
                }
                catch (Exception exception) //Module failed to load
                {
                    Exceptions.ProcessModuleLoadException(this, exception);
                }
            }
            if (Request.QueryString["ln"] != null) // Show the map for the species (ln = Latin Name)
            {
                this.pnlMap.Visible = true;
                this.pnlSearch.Visible = false;
                string LatinName = Request.QueryString["ln"].ToString();
                CDefault cd = (CDefault)Page;
                cd.Title += " - " + LatinName;
                this.lblLatinName.Text = LatinName;
                try
                {
                    DotMapController objDotMap = new DotMapController();
                    this.lblEnglishName.Text = objDotMap.EnglishName(LatinName);
                }
                catch (Exception exc) //Module failed to load
                {
                    Exceptions.ProcessModuleLoadException(this, exc);
                }
            }  
        }

        /// <summary>
        /// Start a new search
        /// </summary>
        protected void cmdSearch_Click(object sender, EventArgs e)
        {
            this.grdResults.CurrentPageIndex = 0;
            this.BindGrid();
        }

        /// <summary>
        /// Delete the entries for a species.
        /// </summary>
        protected void grdResults_DeleteCommand(object source, DataGridCommandEventArgs e)
        {
            try
            {
                DotMapController objDotMap = new DotMapController();
                Label lblLatin = (Label) e.Item.Cells[2].FindControl("lblLatinName");
                Trace.Warn(lblLatin.Text + " deleted");
                objDotMap.DeleteSightings(ModuleId, lblLatin.Text);
                this.BindGrid();
            }
            catch (Exception exc)
            {
                Exceptions.ProcessModuleLoadException(this, exc);
            }
        }

        /// <summary>
        /// Add a delete warning to the delete button on the grid.
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void grdResults_ItemCreated(object sender, DataGridItemEventArgs e)
        {
            if ((e.Item.ItemType == ListItemType.Item) |
                (e.Item.ItemType == ListItemType.AlternatingItem) |
                (e.Item.ItemType == ListItemType.SelectedItem))
            {
                //Get a reference to the LinkButton and add the javascript confirmation
                //the column is templated so you have to use FindControl
                LinkButton lnkDelete = (LinkButton) e.Item.Cells[0].FindControl("cmdDelete");
                lnkDelete.Attributes.Add("onclick", "return confirm('Are you sure you want to delete this species?');");
            }
        }

        /// <summary>
        /// Show the dot map, but with a fixed URL so that it can be recorded.
        /// Looks whacky I know but Dan wanted a quick fix.
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void grdResults_SelectedIndexChanged(object sender, System.EventArgs e)
        {
            Label selectedLatinName = (Label) this.grdResults.SelectedItem.FindControl("lblLatinName");
            Response.Redirect(String.Format(Globals.NavigateURL() + "?ln={0}", selectedLatinName.Text));
        }

        protected void grdResults_PageIndexChanged(object source,
                                                   System.Web.UI.WebControls.DataGridPageChangedEventArgs e)
        {
            this.grdResults.CurrentPageIndex = e.NewPageIndex;
            this.BindGrid();
        }

        /// <summary>
        /// Whacky URL to cope with the whacky earlier URL
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void cmdReturn_Click(object sender, System.EventArgs e)
        {
            Response.Redirect(Request.RawUrl.ToString().Split('?')[0]);
        }
        #endregion

        #region Helper Methods

        /// <summary>
        /// Select the data from the database and bind to the datagrid
        /// </summary>
        private void BindGrid()
        {
            try
            {
                DotMapController objDotMap = new DotMapController();
                this.grdResults.DataSource = objDotMap.ListSpecies(ModuleId, txtEnglishName.Text, txtLatinName.Text);
                this.grdResults.DataBind();
            }
            catch (Exception exc)
            {
                Exceptions.ProcessModuleLoadException(this, exc);
            }
        }

        #endregion

        #region Private Properties

        /// <summary>
        /// If the number of rows has not been set then use 7.
        /// </summary>
        private int NumberOfRows
        {
            get
            {
                int numberOfRows = 7;
                if (Settings["NumberOfRows"] != null)
                {
                    if (Settings["NumberOfRows"].ToString() != "")
                    {
                        numberOfRows = Convert.ToUInt16(Settings["NumberOfRows"]);
                    }
                }
                return numberOfRows;
            }
        }

        #endregion

        #region Optional Interfaces

        /// <summary>
        /// Registers the module actions required for interfacing with the portal framework
        /// </summary>
        /// <value></value>
        /// <returns></returns>
        /// <remarks></remarks>
        /// <history>
        /// </history>
        public ModuleActionCollection ModuleActions
        {
            get
            {
                ModuleActionCollection Actions = new ModuleActionCollection();
                Actions.Add(this.GetNextActionID(),
                            Localization.GetString(ModuleActionType.AddContent, this.LocalResourceFile),
                            ModuleActionType.AddContent, "", "", this.EditUrl(), false, SecurityAccessLevel.Edit, true,
                            false);
                return Actions;
            }
        }

        #endregion
    }
}

