/*************************************************************************
 * Project: Dot Map
 * Copyright: Shropshire Council (c) 2009
 * Purpose: XML feed for http://www.discovershropshire2.org.uk/.   I am not
 *   sure that it is getting used.
 * $Author: $
 * $Date: 2009-12-10 11:02:25 +0000 (Thu, 10 Dec 2009) $
 * $Revision: 92 $
 * $HeadURL: https://sbp.svn.cloudforge.com/naturalshropshire/trunk/DNN/DesktopModules/SCC.DotMap/MapFeed.aspx.cs $
 ************************************************************************/
using System;
using System.Collections;
using System.Text;
using System.Web;
using System.Xml;
using DotNetNuke.Framework;
using SCC.Modules.DotMap.Coord;
using SCC.Modules.DotMap.Data;

public partial class DotMap_MapFeed : DotNetNuke.Framework.CDefault //System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        CDefault thispage = (CDefault)this.Page;
        int portalId = thispage.PortalSettings.PortalId;

        Response.Clear();
        Response.ContentType = "text/xml";
        XmlTextWriter xmlTextWriter = new XmlTextWriter(Response.OutputStream, Encoding.UTF8);
        xmlTextWriter.WriteStartDocument();
        xmlTextWriter.WriteStartElement("rss");
        xmlTextWriter.WriteAttributeString("version", "2.0");
        xmlTextWriter.WriteAttributeString("xmlns", "media", null, "http://search.yahoo.com/mrss");
        xmlTextWriter.WriteAttributeString("xmlns", "georss", null, "http://www.georss.org/georss");
        xmlTextWriter.WriteStartElement("channel");
        xmlTextWriter.WriteElementString("title", "Natural Shropshire");
        xmlTextWriter.WriteElementString("link", "http://www.naturalshropshire.org.uk/");
        xmlTextWriter.WriteElementString("copyright", "(c) 2009, Shropshire Biodiversity Partnership.");
        DotMapController objDotMap = new DotMapController();
        ArrayList tetrads = objDotMap.ListTetrads(portalId);
        xmlTextWriter.WriteElementString("description", tetrads.Count.ToString() + " Tetrads");   
        foreach (InfoPoint infoPoint in tetrads)
        {
            Point point = new Point(infoPoint.GridX + 1000, infoPoint.GridY + 1000); 
            xmlTextWriter.WriteStartElement("item");
            xmlTextWriter.WriteElementString("title", point.SixFigureString);
            string link = this.ListMapPath + "&z=13&mc=" + point.GridX + "," + point.GridY +
                "&xy=" + point.GridX + "," + point.GridY;
            xmlTextWriter.WriteElementString("link", link);
            xmlTextWriter.WriteElementString("guid", this.ListMapPath + "/" + point.SixFigureString);
            xmlTextWriter.WriteElementString("georss:point", point.Latitude + " " + point.Longitude);
            xmlTextWriter.WriteElementString("georss:featuretypetag", "nature");
            xmlTextWriter.WriteEndElement();
        }
        xmlTextWriter.WriteEndElement();
        xmlTextWriter.WriteEndElement();
        xmlTextWriter.WriteEndDocument();
        xmlTextWriter.Flush();
        xmlTextWriter.Close();
        Response.End();
    }

    /// <summary>
    /// This is shit, since it relies on the List Map being at Tab 44, you should search
    /// the portal for the first intance.
    /// </summary>
    private string ListMapPath
    {
        get
        {
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.Append("http://" + HttpContext.Current.Request.ServerVariables["SERVER_NAME"]);
            String applicationName = HttpContext.Current.Request.ApplicationPath.ToString();
            stringBuilder.Append(applicationName == "/" ? String.Empty : applicationName);
            stringBuilder.Append("/Default.aspx?TabId=44");
            return stringBuilder.ToString();
        }
    }

}
