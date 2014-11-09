/*************************************************************************
 * Project: Dot Map
 * Copyright: Shropshire Council (c) 2007
 * Purpose: 
 * $Author: $
 * $Date: 2009-12-10 11:02:25 +0000 (Thu, 10 Dec 2009) $
 * $Revision: 92 $
 * $HeadURL: https://sbp.svn.cloudforge.com/naturalshropshire/trunk/DNN/DesktopModules/SCC.DotMap/DotMapEdit.ascx.cs $
 ************************************************************************/
using System;
using DotNetNuke.Common;
using DotNetNuke.Entities.Modules;
using SCC.Modules.DotMap.Coord;
using SCC.Modules.DotMap.Data;

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
    partial class EditDotMap : PortalModuleBase
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
        }

        protected void cmdUpload_Click(object sender, System.EventArgs e)
        {
            this.lblInfo.Text = "<b>Sightings Uploaded</b>";
            if (this.txtFileName.PostedFile != null)
            {
                int NumberOfLines = 0;
                System.IO.StreamReader re = new System.IO.StreamReader(this.txtFileName.PostedFile.InputStream);
                string input = null;
                while ((input = re.ReadLine()) != null)
                {
                    AddSightingData(this.PortalId, this.ModuleId, input);
                    NumberOfLines++;
                }
                re.Close();
                this.lblInfo.Text += "<p>";
                this.lblInfo.Text += NumberOfLines;
                this.lblInfo.Text += " were read.</p>";
            }
            else
            {
                // No file, so do nothing.
            }
        }

        protected void cmdCancel_Click(object sender, System.EventArgs e)
        {
            Response.Redirect(Globals.NavigateURL(), true);
        }

        protected void cmdReturn_Click(object sender, System.EventArgs e)
        {
            Response.Redirect(Globals.NavigateURL(), true);
        }		
 
    #endregion

    #region Helper Methods

        /// <summary>
        /// 
        /// </summary>
        /// <param name="portalId"></param>
        /// <param name="moduleId"></param>
        /// <param name="input"></param>
        private void AddSightingData(int portalId, int moduleId, string input)
        {
            InfoSighting sighting = new InfoSighting();
            sighting.PortalId = portalId;
            sighting.ModuleId = moduleId;
            string[] Field = input.Split(',');
            sighting.EnglishName = Field[0];
            sighting.LatinName = Field[1];
            sighting.YearSeen = int.Parse(Field[2]);
            if (Field.Length == 5)
            {
                sighting.GridX = int.Parse(Field[3]);
                sighting.GridY = int.Parse(Field[4]);
            }
            else //presume there are only 4 fields
            {
                string nationalGridReference = Field[3].Trim().Replace(" ", "");
                Point point = new Point(nationalGridReference);
                sighting.GridX = point.GridX;
                sighting.GridY = point.GridY;
            }
            DotMapController objDotMap = new DotMapController();
            objDotMap.AddSighting(sighting);
        }

        //Get the first half of the numbers, and make it 5 digits long
        private int GetEastings(string OSGridRef)
        {
            string easting = OSGridRef.Substring(2, (OSGridRef.Length - 2) / 2);
            while(easting.Length <= 4 ) easting = easting + "0";
            return Convert.ToInt32(easting);
        }

        //Get the second half of the numbers, and make it 5 digits long
        private int GetNorthings(string OSGridRef)
        {
            string northing = OSGridRef.Substring(((OSGridRef.Length / 2) + 1));
            while (northing.Length <= 4) northing = northing + "0";
            return Convert.ToInt32(northing);
        }

    #endregion

    }
}

