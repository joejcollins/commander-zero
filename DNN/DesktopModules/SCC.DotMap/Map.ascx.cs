/*************************************************************************
 * Project: Dot Map
 * Copyright: Shropshire Council (c) 2007
 * Purpose: A combination of the GMap.
 * $Author: $
 * $Date: 2009-12-10 11:02:25 +0000 (Thu, 10 Dec 2009) $
 * $Revision: 92 $
 * $HeadURL: https://sbp.svn.cloudforge.com/naturalshropshire/trunk/DNN/DesktopModules/SCC.DotMap/Map.ascx.cs $
 ************************************************************************/
using System;
using System.Collections;
using System.Web.Script.Serialization;
using System.Web.UI;
using DotNetNuke.Common;
using DotNetNuke.Entities.Modules;
using DotNetNuke.Framework;
using SCC.Modules.DotMap.Data;

namespace SCC.Modules.DotMap
{
    public partial class Map : System.Web.UI.UserControl
    {
        /// <summary>
        /// Create a new map everytime so we are starting with 
        /// a clean slate.  This is mainly because there are two
        /// panels on the page and the map isn't shown until the 
        /// first postback.
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        protected void Page_Load(object sender, EventArgs e)
        {
            // Size the map correctly as per the settings
            this.MapCanvas.Attributes.Add("style", "width: " + this.Width + "px; height: " + this.Height + "px;");
            // Set the link location (the querystring is included so it works for the individual species dot maps)
            this.LinkToMap.NavigateUrl = Globals.NavigateURL() + this.Page.Request.Url.Query;

            // Google Search and Map
            Page.ClientScript.RegisterClientScriptInclude("google",
                    "http://www.google.com/jsapi?key=" + this.GoogleMapsKey);
            this.RegisterJavaScriptInclude("/js/MapGoogle.js");
            // OS National Grid and WGS84 conversion
            this.RegisterJavaScriptInclude("/js/LatLngToOSGB.js");
            // National Grid
            this.RegisterJavaScriptInclude("/js/OGBGraticule.js");
            // The map helper uses the LatLngToOSGB.js
            this.RegisterJavaScriptInclude("/js/DotMapHelpers.js");
            // Using the Google Map file

            /* 
             * For the Google map to work in IE the map mut be rendered or made after
             * all the table, i.e. right at the bottom of the page.  Only render the
             * map if the MapCanvas is visible (since MapCanvas is on the control that 
             * has the MakeMap function on).  The MakeMap function has been made unique 
             * by adding the clientId to the end.
             */
            if (this.MapCanvas.Visible && this.GoogleMapsKey != null)
            {
                Page.ClientScript.RegisterStartupScript(this.GetType(), "makemap", 
                    "if (typeof(GLatLngBounds)!= 'undefined') MakeMap" + this.ClientID + "();", true);
            }
        }

        /// <summary>
        /// Helper for registering JavaScripts using the filename as the key.  Thus they 
        /// cannot be registered twice.
        /// </summary>
        /// <param name="scriptName">Name and path to the JavaScript file</param>
        private void RegisterJavaScriptInclude(string scriptName)
        {
            string path = this.TemplateSourceDirectory + scriptName;
            string key = System.IO.Path.GetFileNameWithoutExtension(path); 
            Page.ClientScript.RegisterClientScriptInclude(key, path);
        }

        /// <summary>
        /// Serialize an object to JSON so that it can be used on the client.
        /// Arrh...you are saying but the JavaScriptSerializer has been 
        /// obseleted.  True but it means that the support assemblies can remain
        /// as .net 2.0 framework.  Also you don't need to mark up the classes.
        /// In this situation I feel it makes a better job of it, but your
        /// mileage may vary.
        /// </summary>
        /// <param name="objectToSerialize"></param>
        /// <returns></returns>
        private static string SerializeToJsonString(object objectToSerialize)
        {
            JavaScriptSerializer serializer = new JavaScriptSerializer();
            string json = serializer.Serialize(objectToSerialize);        
            return json;
        }

        #region "Public Properties"

        /// <summary>
        /// 
        /// </summary>
        MapInfoType _mapInfoType = MapInfoType.BAP;
        public enum MapInfoType { BAP, Species }
        public MapInfoType MapInfo
        {
            get
            {
                return this._mapInfoType;
            }
            set
            {
                this._mapInfoType = value;
            }
        }

        #endregion

        #region "Private Properties"

        /// <summary>
        /// Return the Google Maps Key if it is present, or the one
        /// for Natural Shropshire if no other is available.
        /// </summary>
        private string GoogleMapsKey
        {
            get
            {
                PortalModuleBase parent = GetModuleUserControl(this);
                string GoogleKey = Convert.ToString(parent.Settings[SettingsKeys.GOOGLEKEY]);
                // Just for convenience set the Google Maps key if none is available and
                // the module is running on the Natural Shropshire website.
                if ((Request.Url.Host.Contains("naturalshropshire.org.uk")) &&
                    (String.IsNullOrEmpty(GoogleKey)))
                {
                    GoogleKey =
                        "ABQIAAAANXvmjjzMS9vn2VnzZSGvdhTkc4yikSeeXzQ7X4kFbtNzA7GRWxRkzFJ_h_xkgE4YIvZspaw25_H0PQ";
                }
                return GoogleKey;
            }
        }

        /// <summary>
        /// Return a GPoint for the center of the map.
        /// </summary>
        protected InfoPoint MapCenter
        {
            get
            {
                Int32 defaultX = 351000;
                Int32 defaultY = 309000;
                PortalModuleBase parent = GetModuleUserControl(this);
                if (parent.Settings[SettingsKeys.X] != null)
                {
                    if (parent.Settings[SettingsKeys.X].ToString() != "")
                    {
                        defaultX = Convert.ToInt32(parent.Settings[SettingsKeys.X]);
                    }
                }
                if (parent.Settings[SettingsKeys.Y] != null)
                {
                    if (parent.Settings[SettingsKeys.Y].ToString() != "")
                    {
                        defaultY = Convert.ToInt32(parent.Settings[SettingsKeys.Y]);
                    }
                }
                return new InfoPoint(defaultX, defaultY);
            }
        }

        /// <summary>
        /// Return the zoom level from the settings or a default.
        /// </summary>
        protected int ZoomLevel
        {
            get
            {
                const int DEFAULT = 9;
                PortalModuleBase parent = GetModuleUserControl(this);
                if (parent.Settings[SettingsKeys.ZOOM] != null)
                {
                    if (parent.Settings[SettingsKeys.ZOOM].ToString() != String.Empty)
                    {
                        return Convert.ToUInt16(parent.Settings[SettingsKeys.ZOOM]);
                    }
                    return DEFAULT;
                }
                else //there is no setting
                {
                    return DEFAULT;
                }
            }
        }

        /// <summary>
        /// If there is a width setting use it, otherwise use the default.
        /// </summary>
        private int Width
        {            
            get
            {
                const int DEFAULT = 450;
                PortalModuleBase parent = GetModuleUserControl(this);
                if (parent.Settings[SettingsKeys.WIDTH] != null)
                {
                    if (parent.Settings[SettingsKeys.WIDTH].ToString() != "")
                    {
                        return Convert.ToUInt16(parent.Settings[SettingsKeys.WIDTH]);
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
        /// If there is a height setting use it, otherwise use the default.
        /// </summary>
        private int Height
        {
            get
            {
                const int DEFAULT = 470;
                PortalModuleBase parent = GetModuleUserControl(this);
                if (parent.Settings[SettingsKeys.HEIGHT] != null)
                {
                    if (parent.Settings[SettingsKeys.HEIGHT].ToString() != "")
                    {
                        return Convert.ToUInt16(parent.Settings[SettingsKeys.HEIGHT]);
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
        /// Return the outline URL either external or local
        /// </summary>
        protected string Outline
        {
            get
            {
                string DEFAULT = "[]";
                PortalModuleBase parent = GetModuleUserControl(this);
                if (parent.Settings[SettingsKeys.OUTLINE] != null)
                {
                    if (parent.Settings[SettingsKeys.OUTLINE].ToString() != "")
                    {
                        // If is an external file
                        if (parent.Settings[SettingsKeys.OUTLINE].ToString().StartsWith("http"))
                        {
                            return Globals.LinkClick(parent.Settings[SettingsKeys.OUTLINE].ToString(),
                                -1, -1, false);
                        }
                        else // It is a local file stored on DNN.  You cannot use the LinkClick
                             // module so the file has to be accessed directly in this form:
                             // 'http://www.naturalshropshire.org.uk/Portals/0/Maps/Boundaries/Shropshire.xml';
                        {
                            CDefault thispage = (CDefault)this.Page;
                            int portalId = thispage.PortalSettings.PortalId;
                            return this.GetWebAppRoot() + "/Portals/" + portalId + "/" +
                                parent.Settings[SettingsKeys.OUTLINE].ToString();
                        }
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
        /// Little helper to conveniently get the root of the web application.
        /// </summary>
        /// <returns></returns>

        private string GetWebAppRoot() 
        {
            if (Page.Request.ApplicationPath == "/")        
                return "http://" + Page.Request.Url.Host; 
            else
                return "http://" + Page.Request.Url.Host + Page.Request.ApplicationPath; 
        }

        /// <summary>
        /// Return the sightings list as a JSON string
        /// </summary>
        /// <returns></returns>
        public string Dots
        {
            get
            {
                PortalModuleBase parent = GetModuleUserControl(this);
                if (Request.QueryString["ln"] != null)
                {
                    DotMapController objDotMap = new DotMapController();
                    string latinName = Request.QueryString["ln"].ToString();
                    ArrayList tetrads = objDotMap.ListSightings(parent.ModuleId, latinName);
                    return SerializeToJsonString(tetrads);
                }
                else
                {
                    return "[]";
                }
            }
        }

        /// <summary>
        /// If there is a check (true or false) for the National grid use it,
        /// otherwise return the default (false).
        /// </summary>
        protected bool Grid
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
        Boolean _isSpeciesWSOn;
        public Boolean IsSpeciesWSOn
        {
            get { return this._isSpeciesWSOn; }
            set { this._isSpeciesWSOn = value; }
        }
        /// <summary>
        /// 
        /// </summary>
        Boolean _isCountyRecordsWSOn;
        public Boolean IsCountyRecordsWSOn
        {
            get { return this._isCountyRecordsWSOn; }
            set { this._isCountyRecordsWSOn = value; }
        }
        /// <summary>
        /// 
        /// </summary>
        Boolean _isBapWSOn;
        public Boolean IsBapWSOn
        {
            get { return this._isBapWSOn; }
            set { this._isBapWSOn = value; }
        }
        /// <summary>
        /// 
        /// </summary>
        Boolean _isNbnWSOn;
        public Boolean IsNbnWSOn
        {
            get { return this._isNbnWSOn; }
            set { this._isNbnWSOn = value; }
        }

        /// <summary>
        /// 
        /// </summary>
        protected int CutOffYear
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