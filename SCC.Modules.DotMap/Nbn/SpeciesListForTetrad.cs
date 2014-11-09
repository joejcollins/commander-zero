/*************************************************************************
 * Project: Dot Map
 * Copyright: Shropshire Council (c) 2009
 * Purpose: Get species list data back from the NBN Gateway.
 * $Author: $
 * $Date: 2009-12-10 11:02:25 +0000 (Thu, 10 Dec 2009) $
 * $Revision: 92 $
 * $HeadURL: https://sbp.svn.cloudforge.com/naturalshropshire/trunk/SCC.Modules.DotMap/Nbn/SpeciesListForTetrad.cs $
 ************************************************************************/
using System;
using SCC.Modules.DotMap.NbnGateway;
using System.Collections;
using System.Collections.Generic;

namespace SCC.Modules.DotMap.Nbn
{
    public class SpeciesListForTetrad
    {
        private string _termsAndConditionsUrl = string.Empty;
        private List<Species> _speciesList;

        /// <summary>
        /// Get the species list for the tetrad whic contains the X and Y coords
        /// </summary>
        /// <param name="GridX"></param>
        /// <param name="GridY"></param>
        public SpeciesListForTetrad(int GridX, int GridY)
        {
            GatewayWebService gatewayWebService = new GatewayWebService();
            SpeciesListRequest request = new SpeciesListRequest();
            GeographicalFilter geographicalFilter = new GeographicalFilter();

            // Use a BoundingBox to specify a tetrad
            BoundingBox boundingBox = new BoundingBox();
            int tetradX = Convert.ToInt32((GridX / 2000) * 2000);
            int tetradY = Convert.ToInt32((GridY / 2000) * 2000);
            boundingBox.minx = tetradX;
            boundingBox.miny = tetradY;
            boundingBox.maxx = tetradX + 2000;
            boundingBox.maxy = tetradY + 2000;
            boundingBox.srs = SpatialReferenceSystem.osgb_BNG;

            geographicalFilter.Item = boundingBox;
            geographicalFilter.OverlayRule = OverlayRule.within;
            geographicalFilter.MinimumResolution = Resolution._1km;
            geographicalFilter.MinimumResolutionSpecified = true;
            request.GeographicalFilter = geographicalFilter;

            SpeciesListResponse response = gatewayWebService.GetSpeciesList(request);
            this._termsAndConditionsUrl = response.termsAndConditions;

            // Rather than use request.sort = SpeciesSort.Scientific; I have a 
            // special sorter so the list is amenable to converting into a hierachy.
            List<Species> speciesList = new List<Species>();
            speciesList.AddRange(response.SpeciesList);
            speciesList.Sort(new SpeciesComparer());
            this._speciesList = speciesList;
        }

        public string TermsAndConditionsUrl
        {
            get { return this._termsAndConditionsUrl; }
        }

        public List<Species> SpeciesList
        {
            get { return this._speciesList; }
        }



    }
}
