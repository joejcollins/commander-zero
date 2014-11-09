/*************************************************************************
 * Project: Dot Map
 * Copyright: Shropshire Council (c) 2007
 * Purpose: Class to provide access to the data in a convenient form.
 * $Author: $
 * $Date: 2009-12-10 11:02:25 +0000 (Thu, 10 Dec 2009) $
 * $Revision: 92 $
 * $HeadURL: https://sbp.svn.cloudforge.com/naturalshropshire/trunk/SCC.Modules.DotMap/Data/DotMapController.cs $
 ************************************************************************/
using System.Collections;

namespace SCC.Modules.DotMap.Data
{
    ///<summary>
    /// The Controller class for the DotMap
    /// </summary>
    public class DotMapController//: ISearchable, IPortable
    {

        #region Constructors

        public DotMapController()
        {
        }

        #endregion

        #region Public Methods

        /// <summary>
        /// Get a list of the species available on the module
        /// </summary>
        /// <param name="moduleId"></param>
        /// <param name="EnglishName"></param>
        /// <param name="LatinName"></param>
        /// <returns></returns>
        public ArrayList ListSpecies(int moduleId, string EnglishName, string LatinName)
        {
            return DotNetNuke.Common.Utilities.CBO.FillCollection(DataProvider.Instance().ListSpecies(moduleId, EnglishName, LatinName), typeof(InfoSighting));
        }

        /// <summary>
        /// Get a list of the sightings of a given species (latin name).
        /// </summary>
        /// <param name="moduleId"></param>
        /// <param name="latinName"></param>
        /// <returns></returns>
        public ArrayList ListSightings(int moduleId, string latinName)
        {
            return DotNetNuke.Common.Utilities.CBO.FillCollection(DataProvider.Instance().ListSightings(moduleId, latinName), typeof(InfoSightingLite));
        }

        /// <summary>
        /// Delete all the sightings of a given species, this allows the map owner
        /// to remove species that might be threatened somehow and to have complete
        /// control over the data that is retained.
        /// </summary>
        /// <param name="moduleId"></param>
        /// <param name="englishName"></param>
        public void DeleteSightings(int moduleId, string latinName)
        {
            DataProvider.Instance().DeleteSightings(moduleId, latinName);
        }

        /// <summary>
        /// Add an individual sighting to the database, the grid references
        /// is tetradize both on the way in and the way out to ensure that no
        /// detailed data if retained.
        /// </summary>
        /// <param name="objInfoSighting"></param>
        public void AddSighting(InfoSighting objInfoSighting)
        {
            DataProvider.Instance().AddSighting(objInfoSighting.PortalId,
                objInfoSighting.ModuleId, objInfoSighting.EnglishName, objInfoSighting.LatinName,
                objInfoSighting.YearSeen, objInfoSighting.GridX, objInfoSighting.GridY);
        }

        /// <summary>
        /// Get the species information for a particular tetrad, this is for one species
        /// given in the latin name.
        /// </summary>
        /// <param name="LatinName"></param>
        /// <param name="GridX"></param>
        /// <param name="GridY"></param>
        /// <returns></returns>
        public InfoSighting SpeciesForTetrad(string LatinName, int GridX, int GridY)
        {
            return (InfoSighting)DotNetNuke.Common.Utilities.CBO.FillObject(DataProvider.Instance().SpeciesForTetrad(LatinName, GridX, GridY), typeof(InfoSighting));
        }

        public ArrayList ModuleList(int portalId)
        {
            return DotNetNuke.Common.Utilities.CBO.FillCollection(DataProvider.Instance().ModuleList(portalId), typeof(InfoModule));
        }

        public ArrayList ListSpeciesForTetrad(int GridX, int GridY, int moduleId)
        {
            return DotNetNuke.Common.Utilities.CBO.FillCollection(DataProvider.Instance().ListSpeciesForTetrad(GridX, GridY, moduleId), typeof(InfoSighting));
        }

        public ArrayList SpeciesLists(int portalId)
        {
            return DotNetNuke.Common.Utilities.CBO.FillCollection(DataProvider.Instance().SpeciesLists(portalId), typeof(InfoList));
        }

        public ArrayList SpeciesInListForTetrad(int portalId, int speciesListId, int gridX, int gridY)
        {
            return DotNetNuke.Common.Utilities.CBO.FillCollection(DataProvider.Instance().SpeciesInListForTetrad(portalId, speciesListId, gridX, gridY), typeof(InfoSighting));
        }

        public ArrayList ListTetrads(int portalId)
        {
            return DotNetNuke.Common.Utilities.CBO.FillCollection(DataProvider.Instance().ListTetrads(portalId), typeof(InfoPoint));
        }

        public string EnglishName(string LatinName)
        {
            return DataProvider.Instance().EnglishName(LatinName);
        }

        public string LatinName(string EnglishName)
        {
            return DataProvider.Instance().LatinName(EnglishName);
        }

        #endregion

        #region Optional Interfaces

        /*
        /// -----------------------------------------------------------------------------
        /// <summary>
        /// GetSearchItems implements the ISearchable Interface
        /// </summary>
        /// <remarks>
        /// </remarks>
        /// <param name="ModInfo">The ModuleInfo for the module to be Indexed</param>
        /// <history>
        /// </history>
        /// -----------------------------------------------------------------------------
        public SearchItemInfoCollection GetSearchItems(ModuleInfo ModInfo)
        {
            SearchItemInfoCollection SearchItemCollection = new SearchItemInfoCollection();
            List<DotMapInfo> colDotMaps = GetDotMaps(ModInfo.ModuleID);

            foreach (DotMapInfo objDotMap in colDotMaps)
            {
                if (objDotMap != null)
                {
                    SearchItemInfo SearchItem = new SearchItemInfo(ModInfo.ModuleTitle, objDotMap.Content, objDotMap.CreatedByUser, objDotMap.CreatedDate, ModInfo.ModuleID, objDotMap.ItemId.ToString(), objDotMap.Content, "ItemId=" + objDotMap.ItemId.ToString());
                    SearchItemCollection.Add(SearchItem);
                }
            }

            return SearchItemCollection;
        }


        /// -----------------------------------------------------------------------------
        /// <summary>
        /// ExportModule implements the IPortable ExportModule Interface
        /// </summary>
        /// <remarks>
        /// </remarks>
        /// <param name="ModuleID">The Id of the module to be exported</param>
        /// <history>
        /// </history>
        /// -----------------------------------------------------------------------------
        public string ExportModule(int ModuleID)
        {
            string strXML = "";
            List<DotMapInfo> colDotMaps = GetDotMaps(ModuleID);

            if (colDotMaps.Count != 0)
            {
                strXML += "<DotMaps>";
                foreach (DotMapInfo objDotMap in colDotMaps)
                {
                    strXML += "<DotMap>";
                    strXML += "<content>" + XmlUtils.XMLEncode(objDotMap.Content) + "</content>";
                    strXML += "</DotMap>";
                }
                strXML += "</DotMaps>";
            }

            return strXML;
        }

        /// -----------------------------------------------------------------------------
        /// <summary>
        /// ImportModule implements the IPortable ImportModule Interface
        /// </summary>
        /// <remarks>
        /// </remarks>
        /// <param name="ModuleID">The Id of the module to be imported</param>
        /// <param name="Content">The content to be imported</param>
        /// <param name="Version">The version of the module to be imported</param>
        /// <param name="UserId">The Id of the user performing the import</param>
        /// <history>
        /// </history>
        /// -----------------------------------------------------------------------------
        public void ImportModule(int ModuleID, string Content, string Version, int UserId)
        {
            XmlNode xmlDotMaps = Globals.GetContent(Content, "DotMaps");

            foreach (XmlNode xmlDotMap in xmlDotMaps.SelectNodes("DotMap"))
            {
                DotMapInfo objDotMap = new DotMapInfo();

                objDotMap.ModuleId = ModuleID;
                objDotMap.Content = xmlDotMap.SelectSingleNode("content").InnerText;
                objDotMap.CreatedByUser = UserId;
                AddDotMap(objDotMap);
            }

        }
        */
        #endregion

    }
}

