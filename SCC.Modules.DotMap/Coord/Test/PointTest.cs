
/*************************************************************************
 * Project: Dot Map
 * Copyright: Shropshire Council (c) 2009
 * Purpose: 
 * $Author: $
 * $Date: 2009-12-10 11:02:25 +0000 (Thu, 10 Dec 2009) $
 * $Revision: 92 $
 * $HeadURL: https://sbp.svn.cloudforge.com/naturalshropshire/trunk/SCC.Modules.DotMap/Coord/Test/PointTest.cs $
 ************************************************************************/
#if DEBUG

namespace SCC.Modules.DotMap.Coord.Test
{
    using System;
    using NUnit.Framework;
    using System.Collections;
    using SCC.Modules.DotMap.Coord;
    using System.Collections.Generic;

//    English Name,Latin Name,2005,324600,290000
//English Name,Latin Name,1999,324800,290200 
//or

//English Name,Latin Name,2005,SO6366387010
//English Name,Latin Name,1999,SO6387 

    [TestFixture]
    public class PointTest
    {
        [Test]
        public void NationalGridReference04()
        {
            Point point = new Point("SO6387");
            Console.WriteLine("04 " + point.GridX.ToString());

        }
        [Test]
        public void NationalGridReference06()
        {
            Point point = new Point("SO633873");
            Console.WriteLine("06 " + point.GridX.ToString());

        }
        [Test]
        public void NationalGridReference08()
        {
            Point point = new Point("SO63348734");
            Console.WriteLine("08 " + point.GridX.ToString());


        }
        [Test]
        public void NationalGridReference10()
        {
            Point point = new Point("SO6366387010");
            Console.WriteLine("10 " + point.GridX.ToString());

        }
    }
}


#endif