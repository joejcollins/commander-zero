/*************************************************************************
 * Project: Dot Map
 * Copyright: Shropshire Council (c) 2007
 * Purpose: 
 * $Author: $
 * $Date: 2009-12-10 11:02:25 +0000 (Thu, 10 Dec 2009) $
 * $Revision: 92 $
 * $HeadURL: https://sbp.svn.cloudforge.com/naturalshropshire/trunk/Transfer/Modules.cs $
 ************************************************************************/
using System;
using System.Data;
using System.IO;
using Transfer.ModulesTableAdapters;
using Transfer.SightingsTableAdapters;

namespace Transfer 
{
    partial class Modules
    {
        /// <summary>
        /// 
        /// </summary>
        internal static void ToFiles()
        {
            ModulesTableAdapter modulesTableAdapter = new ModulesTableAdapter();
            ModulesDataTable modulesDataTable = modulesTableAdapter.GetData();
            foreach (DataRow modulesDataRow in modulesDataTable.Rows) 
            {
                String dataFileName = modulesDataRow["ModuleTitle"].ToString().Replace(" ", "") 
                    + "@" + modulesDataRow["ModuleID"]
                    + "@" + modulesDataRow["PortalID"];
                FileInfo fileInfo = new FileInfo(dataFileName);
                Console.WriteLine(dataFileName + "...");
                StreamWriter streamWriter = fileInfo.CreateText();

                SightingsTableAdapter sightingsTableAdapter = new SightingsTableAdapter();
                Int32 moduleID = Int32.Parse(modulesDataRow["ModuleID"].ToString());
                Sightings.SightingsDataTable sightingsDataTable =
                    sightingsTableAdapter.GetDataByModuleID(moduleID);
                foreach (DataRow sightingsDataRow in sightingsDataTable)
                {
                    //English Name,Latin Name,2005,324600,290000
                    streamWriter.WriteLine(
                        sightingsDataRow["EnglishName"] + "," +
                        sightingsDataRow["LatinName"] + "," +
                        sightingsDataRow["YearSeen"] + "," +
                        sightingsDataRow["GridX"] + "," +
                        sightingsDataRow["GridY"]
                        );
                }
                streamWriter.Close();
            }
        }
    }
}
