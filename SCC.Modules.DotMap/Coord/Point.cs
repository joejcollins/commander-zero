/*************************************************************************
 * Project: Dot Map
 * Copyright: Shropshire Council (c) 2009
 * Purpose: A point as a convenient fascade for Mr J Stott's excellent 
 *   Jcoord (well actually it is Ncoord which is the same thing but
 *   converted into C#).
 * $Author: $
 * $Date: 2009-12-10 11:02:25 +0000 (Thu, 10 Dec 2009) $
 * $Revision: 92 $
 * $HeadURL: https://sbp.svn.cloudforge.com/naturalshropshire/trunk/SCC.Modules.DotMap/Coord/Point.cs $
 ************************************************************************/

namespace SCC.Modules.DotMap.Coord
{
    public class Point
    {
        #region Private Members
        int _gridX = 0;
        int _gridY = 0;
        string _sixFigureString;
        double _longitude = 0.0;
        double _latitude = 0.0;
        #endregion

        #region Constructors

        /// <summary>
        /// Create a point from an OS grid reference.
        /// </summary>
        /// <param name="NationalGridReference">OS Grid Reference in the form SO6366387010 to SO6387</param>
        public Point(string NationalGridReference)
        {
            //OSRef only takes TG514131 so the grid reference must be chopped up a bit
            // but the test SO6366387010 to SO6387
            OSRef osRef = new OSRef(NationalGridReference.Replace(" ", ""));
            this._gridX = (int)osRef.getEasting();
            this._gridY = (int)osRef.getNorthing();
            this._sixFigureString = osRef.toSixFigureString();
            LatLng latLng = osRef.toLatLng();
            latLng.toWGS84();
            this._longitude = latLng.getLng();
            this._latitude = latLng.getLat();
        }

        public Point(int GridX, int GridY)
        {
            this._gridX = GridX;
            this._gridY = GridY;
            OSRef osRef = new OSRef(GridX, GridY);
            this._sixFigureString = osRef.toSixFigureString();
            LatLng latLng = osRef.toLatLng();
            latLng.toWGS84();
            this._longitude = latLng.getLng();
            this._latitude = latLng.getLat();
        }

        public Point(double Longitude, double Latitude)
        {
            this._longitude = Longitude;
            this._longitude = Latitude;
            LatLng latLng = new LatLng(Latitude, Longitude);
            latLng.toOSGB36();
            OSRef osRef = latLng.toOSRef();
            this._gridX = (int)osRef.getEasting();//Cast the double to an int
            this._gridY = (int)osRef.getNorthing();//Cast the double to an int
            this._sixFigureString = osRef.toSixFigureString();
        }

        #endregion

        #region Public Properties

        public int GridX
        {
            get { return _gridX; }
        }

        public int GridY
        {
            get { return _gridY; }
        }

        public string SixFigureString
        {
            get { return _sixFigureString; }
        }

        public double Longitude
        {
            get { return _longitude; }
        }

        public double Latitude
        {
            get { return _latitude; }
        }

        #endregion
    }
}
