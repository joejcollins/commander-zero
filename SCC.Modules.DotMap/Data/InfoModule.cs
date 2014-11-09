/*************************************************************************
 * Project: Dot Map
 * Copyright: Shropshire Council (c) 2007
 * Purpose: A dumb data class
 * $Author: $
 * $Date: 2009-12-10 11:02:25 +0000 (Thu, 10 Dec 2009) $
 * $Revision: 92 $
 * $HeadURL: https://sbp.svn.cloudforge.com/naturalshropshire/trunk/SCC.Modules.DotMap/Data/InfoModule.cs $
 ************************************************************************/
using System;
namespace SCC.Modules.DotMap.Data
{
    public class InfoModule
    {
        public int PortalId { get; set; }
        public int ModuleId { get; set; }
        public string ModuleTitle { get; set; }
    }
}
