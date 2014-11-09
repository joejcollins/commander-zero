/*************************************************************************
 * Project: Dot Map
 * Copyright: Shropshire Council (c) 2007
 * Purpose: Test the OsgbGridReference object
 * $Author: $
 * $Date: 2009-12-10 11:02:25 +0000 (Thu, 10 Dec 2009) $
 * $Revision: 92 $
 * $HeadURL: https://sbp.svn.cloudforge.com/naturalshropshire/trunk/SCC.Modules.DotMap/Data/Test/SqlDataProviderTest.cs $
 ************************************************************************/
#if DEBUG
using System;
using System.Data;
using NUnit.Framework;

namespace SCC.Modules.DotMap.Data.Test
{
	/// <summary>
	/// 
	/// </summary>
	[TestFixture]
	public class SqlDataProviderTest
    {
        const int TEST_PORTALID = 1; 
		const int TEST_MODULEID = 666; 
		const string TEST_ENGLISH_NAME = "Big Nob";
		const string TEST_LATIN_NAME = "Biggus Dickus";
        const int TEST_YEARSEEN = 1830;
		//co-ordinates of Shirehall in Shrewsbury.
		const int TEST_GRIDX = 350700; 
		const int TEST_GRIDY = 312200;

        [SetUp]
        public void Setup()
        {
            // Copy the web.config over to the nunit directory so config seetings can be loaded 
            System.IO.File.Copy("..\\..\\..\\DNN\\web.config", "SCC.Modules.DotMap.dll.config", true);
        }

        [Test]
        public void CheckConfigFile()
        {
            Assert.AreEqual("Server=desktop\\msde;Database=dnn;uid=dnn;pwd=dnn;", System.Configuration.ConfigurationManager.AppSettings["SiteSqlServer"]);
        }

        [Test]
        public void AddSighting()
        {
            DataProvider.Instance().AddSighting(TEST_PORTALID, TEST_MODULEID, TEST_ENGLISH_NAME,
                TEST_LATIN_NAME, TEST_YEARSEEN, TEST_GRIDX, TEST_GRIDY);
        }

        
        [Test]
        public void SpeciesForTetrad()
        {
            IDataReader dataReader = DataProvider.Instance().SpeciesForTetrad("Vombatus ursinus", 324000, 290000);
            Assert.IsTrue(dataReader.FieldCount == 6, "There should be 6 fields");
            // Call Read before accessing data.
            while (dataReader.Read())
            {
                Console.WriteLine(String.Format("{0}, {1}, {2}, {3}",
                    dataReader[0], dataReader[1], dataReader[2], dataReader[3]));
            }
            // Call Close when done reading.
            dataReader.Close();
        }

        [Test]
        public void ModuleList()
        {
            IDataReader dataReader = DataProvider.Instance().ModuleList(0);
            Assert.IsTrue(dataReader.FieldCount == 3, "There should be 3 fields");
            // Call Read before accessing data.
            while (dataReader.Read())
            {
                Console.WriteLine(String.Format("{0}, {1}, {2}",
                    dataReader[0], dataReader[1], dataReader[2]));
            }
            // Call Close when done reading.
            dataReader.Close();
        }

        [Test]
        public void ListSpeciesForTetrad()
        {
            IDataReader dataReader = DataProvider.Instance().ListSpeciesForTetrad(326000, 298000, 361);
            Assert.IsTrue(dataReader.FieldCount == 6, "There should be 6 fields");
            dataReader = DataProvider.Instance().ListSpeciesForTetrad(374000, 278000, 361);
            while (dataReader.Read())
            {
                Console.WriteLine(String.Format("{0}, {1}, {2} {3}",
                                   dataReader[0], dataReader[1], dataReader[3], dataReader[4]));
            } 
        }

        [Test]
        public void SpeciesList()
        {
            IDataReader dataReader = DataProvider.Instance().SpeciesLists(0);
            Console.Write(dataReader.FieldCount);
        }

        [Test]
        public void SpeciesInListForTetrad()
        {
            IDataReader dataReader = DataProvider.Instance().SpeciesInListForTetrad(0, 1, 326000, 298000);
            Console.Write(dataReader.FieldCount);
    
        }
    }
}
#endif