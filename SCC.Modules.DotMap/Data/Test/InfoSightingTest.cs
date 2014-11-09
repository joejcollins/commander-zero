/*************************************************************************
 * Project: Dot Map
 * Copyright: Shropshire Council (c) 2007
 * Purpose: Test the OsgbGridReference object
 * $Author: $
 * $Date: 2009-12-10 11:02:25 +0000 (Thu, 10 Dec 2009) $
 * $Revision: 92 $
 * $HeadURL: https://sbp.svn.cloudforge.com/naturalshropshire/trunk/SCC.Modules.DotMap/Data/Test/InfoSightingTest.cs $
 ************************************************************************/
#if DEBUG
using System;
using NUnit.Framework;

namespace SCC.Modules.DotMap.Data.Test
{
	/// <summary>
	/// 
	/// </summary>
	[TestFixture]
	public class InfoSightingTest
	{
		InfoSighting _tetradInfo;
		const int TEST_PORTALID = 1; 
		const int TEST_MODULEID = 666; 
		const int TEST_YEARSEEN = 1830;
		//co-ordinates of Shirehall in Shrewsbury.
		const int TEST_GRIDX = 350700; 
		const int TEST_GRIDY = 312200; 

		[Test] 
		public void PublicProperties() 
		{
			this._tetradInfo = new InfoSighting();
			this._tetradInfo.PortalId = TEST_PORTALID;
			Assert.IsTrue(this._tetradInfo.PortalId == TEST_PORTALID);
			this._tetradInfo.ModuleId = TEST_MODULEID;
			Assert.IsTrue(this._tetradInfo.ModuleId == TEST_MODULEID);
			this._tetradInfo.YearSeen = TEST_YEARSEEN;
			Assert.IsTrue(this._tetradInfo.YearSeen == TEST_YEARSEEN);
			this._tetradInfo.GridX = TEST_GRIDX;
			Assert.IsTrue(this._tetradInfo.GridX == TEST_GRIDX);
			this._tetradInfo.GridY = TEST_GRIDY;
			Assert.IsTrue(this._tetradInfo.GridY == TEST_GRIDY);

		}

		[Test]
		public void Constructor()
		{
			this._tetradInfo = new InfoSighting(TEST_PORTALID, TEST_MODULEID,
				TEST_YEARSEEN, TEST_GRIDX, TEST_GRIDY);
			Assert.IsTrue(this._tetradInfo.PortalId == TEST_PORTALID);
			Assert.IsTrue(this._tetradInfo.ModuleId == TEST_MODULEID);
			Assert.IsTrue(this._tetradInfo.YearSeen == TEST_YEARSEEN);
			Assert.IsTrue(this._tetradInfo.GridX == TEST_GRIDX);
			Assert.IsTrue(this._tetradInfo.GridY == TEST_GRIDY);
		}
	}
}
#endif