/*************************************************************************
 * Project: Dot Map
 * Copyright: Shropshire Council (c) 2007
 * Purpose: Test the OsgbGridReference object
 * $Author: $
 * $Date: 2009-12-10 11:02:25 +0000 (Thu, 10 Dec 2009) $
 * $Revision: 92 $
 * $HeadURL: https://sbp.svn.cloudforge.com/naturalshropshire/trunk/SCC.Modules.DotMap/Data/Test/DataProviderTest.cs $
 ************************************************************************/
#if DEBUG
using NUnit.Framework;

namespace SCC.Modules.DotMap.Data.Test
{
	/// <summary>
	/// 
	/// </summary>
	[TestFixture]
	public class DataProviderTest
    {
        [Test]
        public void Connection()
        {
            DataProvider.CreateProvider();
        }

    }
}
#endif
