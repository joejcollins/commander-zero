/*************************************************************************
 * Project: Dot Map
 * Copyright: Shropshire Council (c) 2007
 * Purpose: 
 * $Author: $
 * $Date: 2009-12-10 11:02:25 +0000 (Thu, 10 Dec 2009) $
 * $Revision: 92 $
 * $HeadURL: https://sbp.svn.cloudforge.com/naturalshropshire/trunk/SCC.Modules.DotMap/Data/InfoDotMap.cs $
 ************************************************************************/
using System;

namespace SCC.Modules.DotMap.Data
{
    public class DotMapInfo
    {
        public DotMapInfo()
        {
        }

        public int ModuleId { get; set; }
        public int ItemId { get; set; }
        public string Content { get; set; }
        public int CreatedByUser { get; set; }
        public string CreatedByUserName { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
