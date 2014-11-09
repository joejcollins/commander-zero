/*************************************************************************
 * Project: Dot Map
 * Copyright: Shropshire Council (c) 2007
 * Purpose: Test the OsgbGridReference object
 * $Author: $
 * $Date: 2009-12-10 11:02:25 +0000 (Thu, 10 Dec 2009) $
 * $Revision: 92 $
 * $HeadURL: https://sbp.svn.cloudforge.com/naturalshropshire/trunk/SCC.Modules.DotMap/Data/Test/DotMapControllerTest.cs $
 ************************************************************************/
#if DEBUG
using NUnit.Framework;

namespace SCC.Modules.DotMap.Data.Test
{
	/// <summary>
	/// 
	/// </summary>
	[TestFixture]
	public class DotMapControllerTest
    {
        DotMapController controller;

        [SetUp]
        public void Setup()
        {
            controller = new DotMapController();
        }

        [Test]
        public void AddSighting()
        {
            controller.AddSighting(new InfoSighting());
        }

        [Test]
        public void SpeciesForTetrad()
        {
            int GridX = 324000;
            int GridY = 290000;
            string LatinName = "Vombatus ursinus";
            controller.SpeciesForTetrad(LatinName, GridX, GridY);
        }

        [Test]
        public void ModuleList()
        {

        }
    }
}
#endif