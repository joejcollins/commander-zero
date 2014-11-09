/*************************************************************************
 * Project: Dot Map
 * Copyright: Shropshire Council (c) 2007
 * Purpose: A simple point for holding the X and Y co-ordinates, that can
 *   be serialized to the client (using JSON).  Also for passing about.
 * $Author: $
 * $Date: 2009-12-10 11:02:25 +0000 (Thu, 10 Dec 2009) $
 * $Revision: 92 $
 * $HeadURL: https://sbp.svn.cloudforge.com/naturalshropshire/trunk/SCC.Modules.DotMap/Data/InfoPoint.cs $
 ************************************************************************/
using System;
using System.Runtime.Serialization;

namespace SCC.Modules.DotMap.Data
{
    public class InfoPoint
    {
        public InfoPoint(){}

        public InfoPoint(int gridX, int gridY)
        {
            this.GridX = gridX;
            this.GridY = gridY;
        }

        public int GridX { get; set; }
        public int GridY { get; set; }
    }
}