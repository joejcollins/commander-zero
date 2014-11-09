/*************************************************************************
 * Project: Dot Map
 * Copyright: Shropshire Council (c) 2007
 * Purpose: The abstract data provider on with the provider is based.
 * $Author: $
 * $Date: 2009-12-10 11:02:25 +0000 (Thu, 10 Dec 2009) $
 * $Revision: 92 $
 * $HeadURL: https://sbp.svn.cloudforge.com/naturalshropshire/trunk/SCC.Modules.DotMap/Data/DataProvider.cs $
 ************************************************************************/
using System.Data;
using DotNetNuke.Framework;

namespace SCC.Modules.DotMap.Data
{
    /// <summary>
    /// 
    /// </summary>
    public abstract class DataProvider
    {

    #region Shared/Static Methods

        // singleton reference to the instantiated object 
        static DataProvider  objProvider = null;

        // constructor
        static DataProvider()
        {
            CreateProvider();
        }

        /// <summary>
        /// Dynamically create provider, if not this is probably a test so create 
        /// a SqlProvider directly.
        /// </summary>
        internal static void CreateProvider()
        {
            try
            {
                objProvider = (DataProvider)Reflection.CreateObject("data", "SCC.Modules.DotMap.Data", "");
            }
            catch(System.TypeInitializationException)
            {
                objProvider = new SqlDataProvider();    
            }
        }

        // return the provider
        public static  DataProvider Instance() 
        {
            return objProvider;
        }

    #endregion

    #region Abstract methods

        public abstract IDataReader ListSpecies(int moduleId, string EnglishName, string LatinName);
        public abstract IDataReader ListSightings(int moduleId, string latinName);
        public abstract void DeleteSightings(int moduleId, string latinName);
        public abstract void AddSighting(int portalID, int moduleID, string EnglishName, string LatinName,
            int YearSeen, int GridX, int GridY);
        public abstract IDataReader SpeciesForTetrad(string LatinName, int GridX, int GridY);
        public abstract IDataReader ModuleList(int portalId);
        public abstract IDataReader ListSpeciesForTetrad(int GridX, int GridY, int moduleId);
        public abstract IDataReader SpeciesLists(int portalId);
        public abstract IDataReader SpeciesInListForTetrad(int portalId, int SpeciesListId, int GridX, int GridY);
        public abstract IDataReader ListTetrads(int portalId);

        public abstract string EnglishName(string LatinName);
        public abstract string LatinName(string EnglishName);
    #endregion
    
    }
}
