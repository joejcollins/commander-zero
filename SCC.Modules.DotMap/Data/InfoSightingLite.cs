/*************************************************************************
 * Project: Dot Map
 * Copyright: Shropshire Council (c) 2007
 * Purpose:  A lightweight version of the sighting for holding the X and Y 
 *   co-ordinates, and the year seen.  This is handy for serializing the to 
 *   client, but no good for adding data.
 * $Author: $
 * $Date: 2009-12-10 11:02:25 +0000 (Thu, 10 Dec 2009) $
 * $Revision: 92 $
 * $HeadURL: https://sbp.svn.cloudforge.com/naturalshropshire/trunk/SCC.Modules.DotMap/Data/InfoSightingLite.cs $
 ************************************************************************/
using System;

namespace SCC.Modules.DotMap.Data
{
	public class InfoSightingLite
	{
		public InfoSightingLite(){}
		public InfoSightingLite(int yearSeen, int gridX, int gridY)
		{
			this.YearSeen = yearSeen;
			this.GridX = gridX;
			this.GridY = gridY;
		}

		public int YearSeen { get; set; }
		public int GridX { get; set; }
        public int GridY { get; set; }
	}
}
