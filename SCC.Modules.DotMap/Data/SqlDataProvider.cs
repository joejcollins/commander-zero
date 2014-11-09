/*************************************************************************
 * Project: Dot Map
 * Copyright: Shropshire Council (c) 2007
 * Purpose: An implementation of the data provider using the SQL and the
 *          application data block.  The public methods are the interesting
 *          part.  The rest is pretty much as is from the example code.
 * $Author: $
 * $Date: 2009-12-10 11:02:25 +0000 (Thu, 10 Dec 2009) $
 * $Revision: 92 $
 * $HeadURL: https://sbp.svn.cloudforge.com/naturalshropshire/trunk/SCC.Modules.DotMap/Data/SqlDataProvider.cs $
 ************************************************************************/
using System;
using System.Data;
using DotNetNuke.Common.Utilities;
using DotNetNuke.Framework.Providers;
using Microsoft.ApplicationBlocks.Data;

namespace SCC.Modules.DotMap.Data
{
    public class SqlDataProvider : DataProvider
    {
        #region Private Members

        private const string ProviderType = "data";
        private const string ModuleQualifier = "SCC_";

        private ProviderConfiguration _providerConfiguration = ProviderConfiguration.GetProviderConfiguration(ProviderType);
        private string _connectionString;
        private string _providerPath;
        private string _objectQualifier;
        private string _databaseOwner;

        #endregion

        #region Constructors

        /// <summary>
        /// Constructs new SqlDataProvider instance using the appropriate
        /// connection information.
        /// </summary>
        public SqlDataProvider()
        {
            //Read the configuration specific information for this provider
            Provider objProvider = (Provider)_providerConfiguration.Providers[_providerConfiguration.DefaultProvider];

            //Read the attributes for this provider
            if ((objProvider.Attributes["connectionStringName"] != "") && (System.Configuration.ConfigurationManager.AppSettings[objProvider.Attributes["connectionStringName"]] != ""))
            {
                _connectionString = System.Configuration.ConfigurationManager.AppSettings[objProvider.Attributes["connectionStringName"]];
            }
            else
            {
                _connectionString = objProvider.Attributes["connectionString"];
            }

            _providerPath = objProvider.Attributes["providerPath"];

            _objectQualifier = objProvider.Attributes["objectQualifier"];

            if ((_objectQualifier != "") && (_objectQualifier.EndsWith("_") == false))
            {
                _objectQualifier += "_";
            }

            _databaseOwner = objProvider.Attributes["databaseOwner"];
            if ((_databaseOwner != "") && (_databaseOwner.EndsWith(".") == false))
            {
                _databaseOwner += ".";
            }
        }

        #endregion

        #region Properties

        /// <summary>
        /// Gets and sets the connection string
        /// </summary>
        public string ConnectionString
        {
            get { return _connectionString; }
        }

        /// <summary>
        /// Gets and sets the Provider path
        /// </summary>
        public string ProviderPath
        {
            get { return _providerPath; }
        }

        /// <summary>
        /// Gets and sets the Object qualifier
        /// </summary>
        public string ObjectQualifier
        {
            get { return _objectQualifier; }
        }

        /// <summary>
        /// Gets and sets the database owner
        /// </summary>
        public string DatabaseOwner
        {
            get { return _databaseOwner; }
        }

        #endregion

        #region Private Methods

        /// <summary>
        /// 
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        private string GetFullyQualifiedName(string name)
        {
            return DatabaseOwner + ObjectQualifier + ModuleQualifier + name;
        }

        /// <summary>
        /// Gets the value for the field or DbNull if field has "null" value
        /// </summary>
        /// <param name="Field">The field to evaluate</param>
        /// <returns></returns>
        private Object GetNull(Object Field)
        {
            return Null.GetNull(Field, DBNull.Value);
        }

        #endregion

        #region Public Methods

        /// <summary>
        /// Get a list of the species for the module
        /// </summary>
        /// <param name="moduleId">The id of the current module</param>
        /// <returns></returns>
        public override IDataReader ListSpecies(int moduleId, string EnglishName, string LatinName)
        {
         //   if (search.Length > 2) search = "%" + search;
            return (IDataReader)SqlHelper.ExecuteReader(ConnectionString, 
                GetFullyQualifiedName("DotMapGetSpeciesNames"), 
                moduleId,
                EnglishName + "%",
                LatinName + "%");
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="moduleId"></param>
        /// <param name="latinName"></param>
        /// <returns></returns>
        public override IDataReader ListSightings(int moduleId, string latinName)
        {
            return (IDataReader)SqlHelper.ExecuteReader(ConnectionString, 
                GetFullyQualifiedName("DotMapGetSightings"), 
                moduleId, 
                latinName);
        }

        /// <summary>
        /// Get all the sightings to be displayed on the map.  The sightings list
        /// does not contain duplicates for any given tetrad because the view 
        /// "vwSCC_DotMapTetrads" tetradizes the co-ordinates of the sightings 
        /// and ignores any identical ones.
        /// </summary>
        /// <param name="moduleId"></param>
        /// <param name="latinName"></param>
        public override void DeleteSightings(int moduleId, string latinName)
        {
            SqlHelper.ExecuteNonQuery(ConnectionString, 
                GetFullyQualifiedName("DotMapDeleteSightings"), 
                moduleId, 
                latinName);
        }

        /// <summary>
        /// Add a species sighting to the database
        /// 
        /// The original data is retained. When used or displayed the data is 
        /// tetradized (the resolution is reduced to the 
        /// </summary>
        /// <param name="portalId">The id of the website portal (starts at 0)</param>
        /// <param name="moduleId">The id of the DotNetNuke module</param>
        /// <param name="EnglishName">The English or common name of the species</param>
        /// <param name="LatinName">The Latin name of the species</param>
        /// <param name="YearSeen">The year as four digits (Common Era)</param>
        /// <param name="GridX">Ordnance survey Eastings to 6 figures</param>
        /// <param name="GridY">Ordnance survey Northings to 6 figures</param>
        public override void AddSighting(int portalId, int moduleId, string EnglishName, string LatinName,
            int YearSeen, int GridX, int GridY)
        {
            SqlHelper.ExecuteScalar(ConnectionString,
                GetFullyQualifiedName("DotMapAddSighting"),
                GetNull(portalId),
                GetNull(moduleId),
                GetNull(EnglishName),
                GetNull(LatinName),
                GetNull(YearSeen),
                GetNull(GridX),
                GetNull(GridY)).ToString();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="LatinName"></param>
        /// <param name="GridX"></param>
        /// <param name="GridY"></param>
        /// <returns></returns>
        public override IDataReader SpeciesForTetrad(string LatinName, int GridX, int GridY)
        {
            return (IDataReader)SqlHelper.ExecuteReader(ConnectionString,
                GetFullyQualifiedName("DotMapGetSpeciesForTetrad"),
                LatinName,
                GridX,
                GridY);
        }

        public override IDataReader ModuleList(int portalId)
        {
            return (IDataReader)SqlHelper.ExecuteReader(ConnectionString,
                GetFullyQualifiedName("DotMapGetModuleList"),
                portalId);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="GridX"></param>
        /// <param name="GridY"></param>
        /// <param name="moduleId"></param>
        /// <returns></returns>
        public override IDataReader ListSpeciesForTetrad(int GridX, int GridY, int moduleId)
        {
            return (IDataReader)SqlHelper.ExecuteReader(ConnectionString,
                GetFullyQualifiedName("DotMapGetSpeciesListForTetrad"),
                GridX,
                GridY,
                moduleId);
        }
        
        public override IDataReader SpeciesLists(int portalId)
        {
            return (IDataReader)SqlHelper.ExecuteReader(ConnectionString,
                GetFullyQualifiedName("DotMapGetSpeciesLists"),
                portalId);
        }

        public override IDataReader SpeciesInListForTetrad(int portalId, int SpeciesListId, int GridX, int GridY)
        {
            return (IDataReader)SqlHelper.ExecuteReader(ConnectionString,
                GetFullyQualifiedName("DotMapGetSpeciesInListForTetrad"),
                portalId,
                SpeciesListId,
                GridX,
                GridY);
        }

        public override IDataReader ListTetrads(int portalId)
        {
            return (IDataReader)SqlHelper.ExecuteReader(ConnectionString,
                GetFullyQualifiedName("DotMapGetTetradList"),
                portalId);
        }

        public override string EnglishName(string LatinName)
        {
            return (string) SqlHelper.ExecuteScalar(ConnectionString, GetFullyQualifiedName("DotMapGetEnglishName"), LatinName);
        }

        public override string LatinName(string EnglishName)
        {
            return (string)SqlHelper.ExecuteScalar(ConnectionString, GetFullyQualifiedName("DotMapGetLatinName"), EnglishName);
        }
        #endregion

    }
}
