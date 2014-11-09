/// <reference path="GMAPJSHelper_Release.js" />
/// <reference path="NationalGridHelpers.js" />
/// <reference path="LatLngToOSGB.js" />

google.load('maps', '2');
google.load('search', '1');

function dotMap(mapCanvas) {
    this.mapCanvas = mapCanvas;

    // Map state
    this.gridX = 0;
    this.gridY = 0;
    this.zoomLevel = 0;
    // Map features
    this.isGridOn = false;
    this.outline = "";
    this.dots = eval("([])");
    this.cutOffYear = 0;
    // Map notes
    this.webServicePath = "";
    this.isSpeciesWSOn = false;
    this.isCountyRecordsWSOn = false;
    this.isBapWSOn = false;
    this.isNbnWSOn = false;
    
    // Local map variables. 
    var pin; //the pin
    var tetrad; //the chosen tetrad
    var localSearch = new google.search.LocalSearch();
  
    // Make a Google Map using the above parameters.
    this.make = function() {
        //Override Map State values with values from query string
        if (GetUrlParameter("mc") != "") {
            this.gridX = parseInt(GetUrlParameter("mc").split(',')[0]);
            this.gridY = parseInt(GetUrlParameter("mc").split(',')[1]);
        }
        if (GetUrlParameter("z") != "") this.zoomLevel = parseInt(GetUrlParameter("z"));

        document.body.setAttribute("onunload", "GUnload();");
        if (GBrowserIsCompatible()) {
            var map = new google.maps.Map2(this.mapCanvas,
	                { draggableCursor: 'crosshair', draggingCursor: 'pointer' });
            // Map state
            map.setCenter(new NGRToGLatLng(this.gridX, this.gridY), this.zoomLevel);
            map.addControl(new google.maps.SmallMapControl());
            map.addMapType(G_PHYSICAL_MAP);
            var hierarchy = new GHierarchicalMapTypeControl();
            hierarchy.addRelationship(G_SATELLITE_MAP, G_HYBRID_MAP, null, true);
            map.addControl(hierarchy);
            // Map features
            // Add the National Grid to the map
            if (this.isGridOn) map.addOverlay(new OGBGraticule());
            // Add an outline to the map
            map.addOverlay(new google.maps.GeoXml(this.outline));
            // Add dots to the map
            AddDots(map, this.cutOffYear, this.dots);
            // Map notes
            // Tell the user what the grid reference is.
            google.maps.Event.addListener(map, "mousemove", function(point) {
                setCursorLocation(map, point);
            });
            // Clear the grid reference when the mouse leaves the map.
            google.maps.Event.addListener(map, "mouseout", function(point) {
                clearCursorLocation(map);
            });
            // Add a move listener to restrict the bounds range
            google.maps.Event.addListener(map, "move", function() {
                checkBounds(map);
                setLinkToThisMap(map);
            });
            restrictZoomLevels(map);
            // Add a click listener to find the chosen point
            google.maps.Event.addListener(map, "click", function(marker, point) {
                setMapNote(map, point);
                setLinkToThisMap(map, point);
            });
            if (this.isSpeciesWSOn) {
                google.maps.Event.addListener(map, "click", function(marker, point) {
                    setWsResponse(map, point, 'SpeciesWsResponse', 'SpeciesUpdate', 'County recorder');
                });
            }
            if (this.isCountyRecordsWSOn) {
                google.maps.Event.addListener(map, "click", function(marker, point) {
                    setWsResponse(map, point, 'CountyRecordsWsResponse', 'CountyRecordsUpdate', 'County recorder');
                });
            }
            if (this.isBapWSOn) {
                google.maps.Event.addListener(map, "click", function(marker, point) {
                    setWsResponse(map, point, 'BapWsResponse', 'BapUpdate', 'Special list');
                });
            }
            if (this.isNbnWSOn) {
                google.maps.Event.addListener(map, "click", function(marker, point) {
                    setWsResponse(map, point, 'NbnWsResponse', 'NbnUpdate', 'NBN');
                });
            }
            // Postcode search
            google.maps.Event.addDomListener(getSiblingElement(map, "btnPostcode"), 'click', function() {
                usePointFromPostcode(map, getSiblingElement(map, "txtPostcode").value, clickOnTheMap);
            });
            google.maps.Event.addDomListener(getSiblingElement(map, "txtPostcode"), "keypress", function(e) {
                if (filterEnterKeyPress(e) == false) {
                    usePointFromPostcode(map, getSiblingElement(map, "txtPostcode").value, clickOnTheMap);
                }
            });
            // Place the pointer if the URL requires it
            if (GetUrlParameter("xy") != "") {
                var pinGridX = parseInt(GetUrlParameter("xy").split(',')[0]);
                var pinGridY = parseInt(GetUrlParameter("xy").split(',')[1])
                google.maps.Event.trigger(map, "click", null, NGRToGLatLng(pinGridX, pinGridY));
            }
        }
    }
    
    // Return a GPolyline from a set of National grid references
    function NGRArrayToGPolyline(infoPoints) {
        var latlngs = new Array();
        for (var i = 0; i < infoPoints.length; i++) {
            latlngs.push(NGRToGLatLng(infoPoints[i].GridX, infoPoints[i].GridY)); 
        }
        return new GPolyline(latlngs, "#0000FF", 2, 0.5);
    }
    
    // Add a set of GPolygons (tetrad dots) to the map based on a set of National grid references
    function AddDots(map, cutOffYear, infoSightingsLite) {
        for (var i = 0; i < infoSightingsLite.length; i++) {
            var point = NGRToGLatLng(infoSightingsLite[i].GridX, infoSightingsLite[i].GridY);
            var tetrad = GetTetradCorners(point);
            var polygon;
            if (infoSightingsLite[i].YearSeen >= cutOffYear){
                polygon = new GPolygon(tetrad, "", 0, 0, "#0000FF", 0.4, {clickable: false});
            } else {
                polygon = new GPolygon(tetrad, "", 0, 0, "#0000FF", 0.2, {clickable: false});
            }
            map.addOverlay(polygon);
        }
    }

    // Update the cursor location element with the pointers grid reference
    function setCursorLocation(map, point) {
        var cursorLocationElement = getSiblingElement(map, "CursorLocation");
        cursorLocationElement.innerHTML = GetGridReference(point);
    }
    
    // Clear the grid reference when the mouse leaves the map
    function clearCursorLocation(map) {
        var cursorLocationElement = getSiblingElement(map, "CursorLocation");
        cursorLocationElement.innerHTML = "";
    }
    
    // Element Ids in ASP.NET are heirachical so you can get a sister elements Id
    // using the maps parent Id and the server control ID.
    function getSiblingElement(map, elementId) {
        var mapId = map.getContainer().id;
        var noteSiblingId = mapId.substring(0, mapId.lastIndexOf("_") + 1) + elementId;
        return document.getElementById(noteSiblingId);
    }

    // The allowed region which the whole map must be within
    var allowedBounds = new google.maps.LatLngBounds(new GLatLng(49.5, -10), new GLatLng(59, 2.6));
    // If the map position is out of range, move it back
    function checkBounds(map) {
        // Perform the check and return if OK
        if (allowedBounds.contains(map.getCenter())) {
            return;
        }
        // It`s not OK, so find the nearest allowed point and move there
        var C = map.getCenter();
        var X = C.lng();
        var Y = C.lat();
        var AmaxX = allowedBounds.getNorthEast().lng();
        var AmaxY = allowedBounds.getNorthEast().lat();
        var AminX = allowedBounds.getSouthWest().lng();
        var AminY = allowedBounds.getSouthWest().lat();
        if (X < AminX) { X = AminX; }
        if (X > AmaxX) { X = AmaxX; }
        if (Y < AminY) { Y = AminY; }
        if (Y > AmaxY) { Y = AmaxY; }
        map.setCenter(new GLatLng(Y, X));
    }

    // Restrict the range of Zoom Levels for all map types
    function restrictZoomLevels(map) {
        var mapTypes = map.getMapTypes();
        for (var i = 0; i < mapTypes.length; i++) {
            mapTypes[i].getMinimumResolution = function() { return 8; }
            mapTypes[i].getMaximumResolution = function() { return 19; }
        }
    }

    // Update the map note saying where the tetrad is
    function setMapNote(map, point) {
        movePin(map, point);
        moveTetrad(map, point);
        var mapNoteElement = getSiblingElement(map, "MapNote");
        mapNoteElement.innerHTML = "Marker is at " + GetGridReference(point);
        mapNoteElement.innerHTML += " and is in tetrad " + GetDinty(point) + ".";
    }

    // Change the link-to-map parameters to reflect the map state
    function setLinkToThisMap(map, point) {
        var linkToMapElement = getSiblingElement(map, "LinkToMap");
        var linkHref = linkToMapElement.href;
        var xy = GetUrlParameter("xy");
        var ln = GetUrlParameter("ln")
        // Might want to save the latin name and the marker
        linkHref = linkHref.split('?')[0];//remove the parameters
        linkHref = linkHref + "?z=" + map.getZoom();
        var center = GLatLngToNGR(map.getCenter());
        linkHref = linkHref + "&mc=" + center.east + "," + center.north;
        if (point != undefined) { //point is optional parameter
            var marker = GLatLngToNGR(point);
            linkHref = linkHref + "&xy=" + marker.east + "," + marker.north;
        } else {
            if (xy != "") {
                linkHref = linkHref + "&xy=" + xy;
            } else {
            // Don't add a parameter            
            }
        }
        if (ln != "") {
            linkHref = linkHref + "&ln=" + ln;
        } else {
            // Don't add a parameter
        }
        linkToMapElement.href = linkHref;
    }

    // Get the web service response, and put it in an element
    function setWsResponse(map, point, responseId, wsEndPoint, dataDescription) {
        var gridReference = GLatLngToNGRTetrad(point);
        var wsResponseElement = getSiblingElement(map, responseId);
        var request = GXmlHttp.create();
        var timeOutId = setTimeout(function() {
            wsResponseElement.innerHTML = "<div class='SubHead'>Getting the " +
            dataDescription + ' data took too long</div>So I gave up';
            request = null;
        }, 14000);
        var queryString = GetModulePath() + "MapWebService.asmx/" + wsEndPoint + "?gridX=" + gridReference.east
            + "&gridY=" + gridReference.north + "&ln=" + GetUrlParameter("ln");
        request.open("GET", queryString, true);
        request.onreadystatechange = function() {
            if ((request.readyState == 1) || (request.readyState == 2) || (request.readyState == 3)) {
                wsResponseElement.innerHTML = '<img src="' + GetModulePath() + 'Indicator.gif" alt="Waiting" /> ' +
                    'Waiting for ' + dataDescription + ' data...';
            }
            if (request.readyState == 4) {
                var xmlDoc = request.responseXML;
                try {
                    var info = xmlDoc.getElementsByTagName("string")[0].firstChild.nodeValue
                    wsResponseElement.innerHTML = info;
                } catch (err) {
                    wsResponseElement.innerHTML = "<div class='SubHead'>Sorry there was a problem getting the " +
                    dataDescription + ' data</div>The error was (' + err.description + ')';
                }
                clearTimeout(timeOutId);
            }
        }       //function
        request.send(null);
    }

    // Move the pin to where the user has clicked and set the title
    // to the grid reference.
    function movePin(map, point) {
        if (pin) map.removeOverlay(pin);
        pin = new GMarker(point, { clickable: false, title: GetGridReference(point) });
        map.addOverlay(pin);
    }

    // Move the tetrad to around where the user has clicked.
    function moveTetrad(map, point) {
        if (tetrad) map.removeOverlay(tetrad);
        var corners = GetTetradCorners(point);
        tetrad = new GPolyline(corners, "#FF0000", 3)
        map.addOverlay(tetrad);
    }

    // Get a GLatLng from a National grid reference.
    function NGRToGLatLng(eastings, northings) {
        var ogb = new NEtoLL(eastings, northings);
        var wg84 = new OGBToWGS84(ogb.lat, ogb.lon, 0);
        return new GLatLng(wg84.lat, wg84.lon);
    }
    
    // Get a National grid reference from pa GLatLng
    function GLatLngToNGR(point){
        var wg84 = new WGS84ToOGB(point.y, point.x, 0);
        return ogb = new LLtoNE(wg84.lat, wg84.lon);
    }
    
    // Get a National grid reference for a tetrad from a GLatLng
    function GLatLngToNGRTetrad(point) {
        var ogb = GLatLngToNGR(point);
        //Reduce to the corner
        var gridX = parseInt(ogb.east / 2000) * 2000;
        var gridY = parseInt(ogb.north / 2000) * 2000;
        return new OGBNorthEast(gridX, gridY);
    }

    // Get the corners of the tetrad
    function GetTetradCorners(point) {
        var ogb = GLatLngToNGR(point);
        //Reduce to the corner
        var gridX = parseInt(ogb.east / 2000) * 2000;
        var gridY = parseInt(ogb.north / 2000) * 2000;
        var corners = [];
        corners.push(NGRToGLatLng(gridX, gridY));
        corners.push(NGRToGLatLng(gridX, gridY + 2000));
        corners.push(NGRToGLatLng(gridX + 2000, gridY + 2000));
        corners.push(NGRToGLatLng(gridX + 2000, gridY));
        corners.push(NGRToGLatLng(gridX, gridY));
        return corners; //Array of GLatLngs
    }

    //
    function usePointFromPostcode(map, postcode, callbackFunction) {
        postcode = postcode.replace(/^\s+|\s+$/g, ''); //trim
        if (postcode != "") {           
            localSearch.setSearchCompleteCallback(null, function() {
                if (localSearch.results[0]) {
                    var resultLat = localSearch.results[0].lat;
                    var resultLng = localSearch.results[0].lng;
                    var point = new GLatLng(resultLat, resultLng);
                    if (allowedBounds.contains(point)) {
                        callbackFunction(map, point);
                    } else {
                        alert("Sorry " + postcode + " is not in my area.");
                    }
                } else {
                    alert("Sorry I couldn't find " + postcode + ".");
                }
            });
            localSearch.execute(postcode + ", UK");
        }
    }

    //
    function clickOnTheMap(map, point) {
        google.maps.Event.trigger(map, "click", null, point);
        map.setCenter(point, 13);
    }
}
