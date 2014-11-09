/*************************************************************************
 * Project: Dot Map
 * Copyright: Shropshire Council (c) 2009
 * Purpose: 
 * $Author: $
 * $Date: 2009-12-10 11:02:25 +0000 (Thu, 10 Dec 2009) $
 * $Revision: 92 $
 * $HeadURL: https://sbp.svn.cloudforge.com/naturalshropshire/trunk/SCC.Modules.DotMap/Coord/Test/JStottTest.cs $
 ************************************************************************/
#if DEBUG
using System;
using NUnit.Framework;

namespace SCC.Modules.DotMap.Coord
{
    /// <summary>
    /// Nunit tests
    /// </summary>
    [TestFixture]
    public class JStottTest
    {
        /// <summary>
        /// 
        /// </summary>
        [Test]
        public void OswestryFiveCross1()
        {
            LatLng latLng = new LatLng(52.880889, -3.041626);
            Console.WriteLine("Latitude/Longitude: " + latLng.toString());
            latLng.toOSGB36();
            OSRef osref = latLng.toOSRef();
            Console.WriteLine("OSNG: " + osref.toString());
            Console.WriteLine("------");
        }

        /// <summary>
        /// 
        /// </summary>
        [Test]
        public void OswestryFiveCross2()
        {
            OSRef osref = new OSRef(330000, 332000);
            Console.WriteLine("OSNG: " + osref.toString());
            LatLng latLng = osref.toLatLng();
            latLng.toWGS84();
            Console.WriteLine("Latitude/Longitude: " + latLng.toString());
            Console.WriteLine("------");
        }

        /// <summary>
        /// 
        /// </summary>
        [Test]
        public void OswestryFiveCross3()
        {
            OSRef osref = new OSRef("SJ300320");
            Console.WriteLine("OSNG: " + osref.toString());
            LatLng latLng = osref.toLatLng();
            latLng.toWGS84();
            Console.WriteLine("Latitude/Longitude: " + latLng.toString());
            Console.WriteLine("------");
        }
    }
}


#endif