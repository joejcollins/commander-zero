/*************************************************************************
 * Project: Dot Map
 * Copyright: Shropshire Council (c) 2007
 * Purpose: A dumb data class
 * $Author: $
 * $Date: 2009-12-10 11:02:25 +0000 (Thu, 10 Dec 2009) $
 * $Revision: 92 $
 * $HeadURL: https://sbp.svn.cloudforge.com/naturalshropshire/trunk/SCC.Modules.DotMap/Data/InfoSighting.cs $
 ************************************************************************/
using System;

namespace SCC.Modules.DotMap.Data
{
	public class InfoSighting
	{
		public InfoSighting(){}
		public InfoSighting(int portalId, int moduleId, int yearSeen, int gridX, int gridY)
		{
			this.PortalId = portalId;
			this.ModuleId = moduleId;
			this.YearSeen = yearSeen;
			this.GridX = gridX;
			this.GridY = gridY;
		}

        public InfoSighting(int portalId, int moduleId, string EnglishName, string LatinName, 
			int YearSeen, int GridX, int GridY)
		{
			this.PortalId = portalId;
			this.ModuleId = moduleId;
			this.EnglishName = EnglishName;
			this.LatinName = LatinName;
			this.YearSeen = YearSeen;
			this.GridX = GridX;
			this.GridY = GridY;			
		}

        public int PortalId { get; set; }
        public int ModuleId { get; set; }
        public string EnglishName { get; set; }
        public string LatinName { get; set; }
        public int YearSeen { get; set; }
        public int GridX { get; set; }
        public int GridY { get; set; }
	}
}
