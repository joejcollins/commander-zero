/*************************************************************************
 * Project: Dot Map
 * Copyright: Shropshire Council (c) 2009
 * Purpose: Special comparer so the list is amenable to converting into a hierachy.
 * $Author: $
 * $Date: 2009-12-10 11:02:25 +0000 (Thu, 10 Dec 2009) $
 * $Revision: 92 $
 * $HeadURL: https://sbp.svn.cloudforge.com/naturalshropshire/trunk/SCC.Modules.DotMap/Nbn/SpeciesComparer.cs $
 ************************************************************************/
using System;
using System.Collections.Generic;
using System.Text;
using SCC.Modules.DotMap.NbnGateway;

namespace SCC.Modules.DotMap.Nbn
{
    class SpeciesComparer: IComparer<Species>
    {
        int IComparer<Species>.Compare(Species species1, Species species2)
        {
            int returnValue = 1;
            if (species1 != null && species2 == null)
            {
                returnValue = 0;
            }
            else if (species1 == null && species2 != null)
            {
                returnValue = 0;
            }
            else if (species1 != null && species2 != null)
            {
                if (0 == species2.TaxonReportingCategory.Value.CompareTo(species1.TaxonReportingCategory.Value))
                {
                    returnValue = species2.ScientificName.CompareTo(species1.ScientificName);
                }
                else
                {
                    returnValue = species1.TaxonReportingCategory.Value.CompareTo(species2.TaxonReportingCategory.Value);
                }
            }
            return returnValue;
        }
    }
}
