/*************************************************************************
 * Project: Dot Map
 * Copyright: Shropshire Council (c) 2007
 * Purpose: 
 * $Author: $
 * $Date: 2009-12-10 11:02:25 +0000 (Thu, 10 Dec 2009) $
 * $Revision: 92 $
 * $HeadURL: https://sbp.svn.cloudforge.com/naturalshropshire/trunk/Transfer/Sightings.cs $
 ************************************************************************/
using System;
using System.IO;
using Transfer.ModulesTableAdapters;
using Transfer.SightingsTableAdapters;

namespace Transfer 
{
    partial class Sightings
    {
        /// <summary>
        /// Write the data from the file into the database.
        /// </summary>
        internal static void FromFile(string fileName, int moduleID, int portalID)
        {
            //Check that there is a module
            ModulesTableAdapter modulesTableAdapter = new ModulesTableAdapter();
            Modules.ModulesDataTable modulesDataTable = modulesTableAdapter.GetDataByModuleId(moduleID);
            if (modulesDataTable.Rows.Count < 1)
            {
                throw new Exception("Cannot find a module with ID " + moduleID);
            }
            else // the module is for real so load up the data.
            {
                SightingsTableAdapter sightingsTableAdapter = new SightingsTableAdapter();
                StreamReader streamReader = new StreamReader(fileName);
                string line = null;
                while ((line = streamReader.ReadLine()) != null)
                {
                    string[] Field = line.Split(',');
                    Console.Write(".");
                    sightingsTableAdapter.SCC_DotMapAddSighting(portalID, moduleID,
                                                                Field[0], //EnglishName
                                                                Field[1], //LatinName
                                                                int.Parse(Field[2]), //YearSeen
                                                                int.Parse(Field[3]), //GridX
                                                                int.Parse(Field[4])); //GridY
                }
                streamReader.Close();
            }
        }
    }
}
