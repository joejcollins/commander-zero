/*************************************************************************
 * Project: Dot Map
 * Copyright: Shropshire Council (c) 2009
 * Purpose: 
 * $Author: $
 * $Date: 2009-12-10 11:02:25 +0000 (Thu, 10 Dec 2009) $
 * $Revision: 92 $
 * $HeadURL: https://sbp.svn.cloudforge.com/naturalshropshire/trunk/SCC.Modules.DotMap/Nbn/Test/NbnTest.cs $
 ************************************************************************/
#if DEBUG

namespace SCC.Modules.DotMap.Nbn.Test
{
    using System;
    using NUnit.Framework;
    using System.Collections;
    using SCC.Modules.DotMap.NbnGateway;
    using System.Collections.Generic;

    /// <summary>
    /// Summary description for TetradInfo
	/// </summary>
	[TestFixture]
	public class NbnTest
	{
		// co-ordinates of Shirehall in Shrewsbury.
		const int TEST_GRIDX = 350700; 
		const int TEST_GRIDY = 312200;

        [Test]
        public void ListSpeciesForTetrad()
        {
            SpeciesListForTetrad speciesListForTetrad = new SpeciesListForTetrad(TEST_GRIDX, TEST_GRIDY);
            Console.WriteLine(speciesListForTetrad.TermsAndConditionsUrl);
            Console.WriteLine(speciesListForTetrad.SpeciesList.Capacity);
            foreach (Species species in speciesListForTetrad.SpeciesList)
            {
                Console.Write(species.TaxonReportingCategory.Value + " -- ");
                Console.WriteLine(species.CommonName + " (" + species.ScientificName + ") ");
            }
         

        }
	}
}
#endif
