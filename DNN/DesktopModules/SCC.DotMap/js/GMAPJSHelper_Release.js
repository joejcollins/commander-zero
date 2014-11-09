GAdsManager = function(map, publisherId, adsManagerOptions) {
    /// <summary>Creates a new GAdsManager object that requests AdSense ads from Google's servers. (Since 2.85)</summary>
    /// <param name="map" type="String">The map parameter identifies the map on which this GAdsManager should display ads.</param>
    /// <param name="publisherId" type="String">The publisherId parameter specifies the developer's AdSense account.</param>
    /// <param name="adsManagerOptions" type="GAdsManagerOptions">The adsManagerOptions parameter is a GAdsManagerOptions object literal.</param>
}

GAdsManager.prototype =
{
    // ====================================================================================
    // Methods
    // ====================================================================================
    enable: function() {
        /// <summary>Enables fetching of ads. Ads are not fetched by default. (Since 2.85)</summary>
    },

    disable: function() {
        /// <summary>Disables fetching of ads. (Since 2.85)</summary>
    }
}
﻿GAdsManagerOptions = function() {
    /// <field name="maxAdsOnMap" type="Number">The maximum number of ads to show on the map at any time. The default value is 3. (Since 2.85)</field>
    /// <field name="channel" type="String">The AdSense channel used for fetching ads. Channels are an optional feature that AdSense publishers can use to track ad revenue from multiple sources. (Since 2.85)</field>
    /// <field name="minZoomLevel" type="Number">The minimum zoom level at which to show ads. The default value is 6. (Since 2.85)</field>
}

GAdsManagerOptions.prototype =
{
    // ====================================================================================
    // Properties
    // ====================================================================================
    maxAdsOnMap: null,
    channel: null,
    minZoomLevel: null
}
﻿GBounds = function(points) {
    /// <summary>Constructs a rectangle that contains all the given points.</summary>
    /// <param name="points">Points that compose the rectangle.</param>
    /// <field name="minX" type="Number">The x coordinate of the left edge of the rectangle.</field>
    /// <field name="minY" type="Number">The y coordinate of the top edge of the rectangle.</field>
    /// <field name="maxX" type="Number">The x coordinate of the right edge of the rectangle.</field>
    /// <field name="maxY" type="Number">The y coordinate of the bottom edge of the rectangle.</field>
    /// <returns type="Object"></returns>
}

GBounds.prototype =
{
    toString: function() {
        /// <summary>Returns a string that contains the coordinates of the upper left and the lower right corner points of the box, in this order, separated by comma, surrounded by parentheses.</summary>
        /// <returns type="String"></returns>
    },

    equals: function(other) {
        /// <summary>Returns true if all parameters in this rectangle are equal to the parameters of the other. (Since 2.98)</summary>
        /// <param name="other" type="GBounds">GBounds to compare</param>
        /// <returns type="Boolean"></returns>
    },

    mid: function() {
        /// <summary>Returns the pixel coordinates of the center of the rectangular area. (Since 2.88)</summary>
        /// <returns type="GPoint"></returns>
    },

    min: function() {
        /// <summary>Returns the pixel coordinates of the upper left corner of the rectangular area.</summary>
        /// <returns type="GPoint"></returns>
    },

    max: function() {
        /// <summary>Returns the pixel coordinates of the lower right corner of the rectangular area.</summary>
        /// <returns type="GPoint"></returns>
    },

    containsBounds: function(other) {
        /// <summary>Returns true if the passed rectangular area is entirely contained in this rectangular area.</summary>
        /// <param name="other" type="GBounds">Possible containing GBounds.</param>
        /// <returns type="Boolean"></returns>
    },

    containsPoint: function(point) {
        /// <summary>Returns true if the rectangular area (inclusively) contains the pixel coordinates. (Since 2.88)</summary>
        /// <param name="point" type="GPoint">Possible contained GPoint.</param>
        /// <returns type="Boolean"></returns>
    },

    extend: function(point) {
        /// <summary>Enlarges this box so that the point is also contained in this box.</summary>
        /// <param name="point" type="GBounds">GPoint to be contained.</param>
    }
}
﻿GBrowserIsCompatible = function() {
    /// <summary>Returns true if the current browser supports the maps API library.</summary>
    /// <returns type="Boolean"></returns>
}
﻿GClientGeocoder = function(cache) {
    /// <summary>Creates a new instance of a geocoder that talks directly to Google servers.</summary>
    /// <param name="cache">The optional cache parameter allows one to specify a custom client-side cache of known addresses. If none is specified, a GFactualGeocodeCache is used. (Since 2.55)</param>
    /// <returns type="Object"></returns>
}

GClientGeocoder.prototype =
{
    getLatLng: function(address, callback) {
        /// <summary>Sends a request to Google servers to geocode the specified address. If the address was successfully located, the user-specified callback function is invoked with a GLatLng point.Otherwise, the callback function is given a null point. In case of ambiguous addresses, only the point for the best match is passed to the callback function. (Since 2.55)</summary>
        /// <param name="address" type="string">Address to geocode</param>
        /// <param name="callback">Callback function to be called when geocode is done.</param>
        /// <returns type="String"></returns>
    },

    getLocations: function(query, callback) {
        /// <summary>This method sends a request to the Google geocoding service, asking it to parse the given query and handle the response in the given callback. Geocoding refers to the conversion of human-readable addresses into latitude/longitude values. The Google geocoding service also supports reverse geocoding, in which a provided geographic point is converted into a human-readable address.</summary>
        /// <param name="query" type="string">Address to geocode</param>
        /// <param name="callback">Callback function to be called when geocode is done.</param>
        /// <returns type="String"></returns>
    },

    getCache: function() {
        /// <summary>Returns currently used geocode cache, or null, if no client-side caching is performed. (Since 2.55)</summary>
        /// <returns type="GGeocodeCache"></returns>
    },

    setCache: function(cache) {
        /// <summary>Sets a new client-side caching. If this method is invoked with cache set to null, client-side caching is disabled. Setting a new cache discards previously stored addresses. (Since 2.55)</summary>
        /// <param name="cache"></param>
    },

    setViewport: function(bounds) {
        /// <summary>Sets the geocoder to magnify geocoding results within or near the given viewport. The viewport is expressed as a GLatLngBounds rectangle. Note that setting a viewport does not restrict results to that bounding box, though it will elevate them in priority. (Since 2.82)</summary>
        /// <param name="bounds" type="GLatLngBounds">The viewport is expressed as a GLatLngBounds rectangle.</param>
    },

    getViewport: function() {
        /// <summary>Returns the viewport for magnifying geocoding results within that geocoder. The viewport is expressed as a GLatLngBounds rectangle. (Since 2.82)</summary>
        /// <returns type="GLatLngBounds"></returns>
    },

    setBaseCountryCode: function(countryCode) {
        /// <summary>Sets the geocoder to bias search results as if they were sent from the domain specified by the given country code top-level domain (ccTLD). Geocoding is only supported for those countries in which Google Maps itself supports geocoding. Most ccTLD codes are identical to ISO 3166-1 codes, with some notable exceptions. For example, Great Britain's ccTLD is "uk" (.co.uk) while its ISO 3166-1 code is "GB." Note that the default domain is the domain from which you initially load the Maps API. Country codes are case insensitive. (Since 2.82)</summary>
        /// <param name="countryCode" type="String">Code of the country. Codes are identical to ISO 3166-1, for example, Great Britain's ccTLD is "uk" (.co.uk) while its ISO 3166-1 code is "GB."</param>
    },

    getBaseCountryCode: function() {
        /// <summary>Returns the current country code in use by the given geocoder. (If no country code is in effect, this method returns null.) (Since 2.82)</summary>
        /// <returns type="String"></returns>
    },

    reset: function() {
        /// <summary>Resets the geocoder. In particular this method calls the GGeocodeCache.reset() method on the client-side cache, if one is used by this geocoder. (Since 2.55)</summary>
    }

}
﻿GControlPosition = function(anchor, offset) {
    /// <summary>This class described the position of a control in the map view. It consists of a corner relative to where the control is positioned, and an offset that determines this position. It can be passed as optional argument position to the method GMap2.addControl(), and it is returned from method GControl.getDefaultPosition().</summary>
}
﻿GControl = function(printable, selectable) {
    /// <summary>Creates the prototype instance for a new control class. Flag printable indicates that the control should be visible in the print output of the map. Flag selectable indicates that the control will contain text that should be selectable.</summary>
    /// <param name="printable" type="Boolean" optional="true">(optional) Is control printable?</param>
    /// <param name="selectable" type="Boolean" optional="true">(optional) Is control selectable?</param>
    /// <returns type="Object"></returns>
}

GControl.prototype =
{
    printable: function() {
        /// <summary>Returns to the map if the control should be printable.</summary>
        /// <returns type="Boolean"></returns>
    },

    selectable: function() {
        /// <summary>Returns to the map if the control contains selectable text.</summary>
        /// <returns type="Boolean"></returns>
    },

    initialize: function(map) {
        /// <summary>Will be called by the map so the control can initialize itself. The control will use the method GMap2.getContainer() to get hold of the DOM element that contains the map, and add itself to it. It returns the added element.</summary>
        /// <param name="map" type="GMap2">The map to initialize.</param>
        /// <returns domElement="true"></returns>
    },

    getDefaultPosition: function() {
        /// <summary>Returns to the map the position in the map view at which the control appears by default. This will be overridden by the second argument to GMap2.addControl().</summary>
        /// <returns type="	GControlPosition"></returns>
    }
}

﻿GControlAnchor = function() {
    /// <field name="G_ANCHOR_TOP_RIGHT">The control will be anchored in the top right corner of the map.</field>
    /// <field name="G_ANCHOR_TOP_LEFT">The control will be anchored in the top left corner of the map.</field>
    /// <field name="G_ANCHOR_BOTTOM_RIGHT">The control will be anchored in the bottom right corner of the map.</field>
    /// <field name="G_ANCHOR_BOTTOM_LEFT">The control will be anchored in the bottom left corner of the map.</field>
}

GControlAnchor.prototype =
{
    // ====================================================================================
    // Properties
    // ====================================================================================
    G_ANCHOR_TOP_RIGHT : null,
    G_ANCHOR_TOP_LEFT : null,
    G_ANCHOR_BOTTOM_RIGHT : null,
    G_ANCHOR_BOTTOM_LEFT : null
}
﻿GCopyright = function(id, bounds, minZoom, text) {
    /// <summary>Creates a copyright information object with the given properties.</summary>
    /// <param name="id" type="Number">A unique identifier for this copyright information.</param>
    /// <param name="minZoom" type="Number">The lowest zoom level at which this information applies.</param>
    /// <param name="bounds" type="GLatLngBounds">The region to which this information applies.</param>
    /// <param name="text" type="string">The text of the copyright message.</param>
    /// <returns type="Object"></returns>
}
﻿GCopyrightCollection = function(prefix) {
    /// <summary>Copyright messages produced from this copyright collection will have the common prefix given as the argument. Example: "Imagery (C) 2006"</summary>
    /// <param name="prefix" type="string" optional="true">Optional prefix string</param>
    /// <param name="selectable" type="Boolean" optional="true">(optional) Is control selectable?</param>
    /// <field name="newcopyright">This event is fired when a new copyright was added to this copyright collection (you can use this parameter: copyright).</field>
    /// <returns type="Object"></returns>
}

GCopyrightCollection.prototype =
{
    addCopyright: function(copyright) {
        /// <summary>Adds a copyright information object to the collection.</summary>
        /// <param name="copyright" type="GCopyright">Copyright to be added</param>
    },

    getCopyrights: function(bounds, zoom) {
        /// <summary>Returns all copyright strings that are pertinent for the given map region at the given zoom level. Example: [ "Google", "Keyhole" ]</summary>
        /// <param name="bounds" type="GLatLngBounds">Map region</param>
        /// <param name="zoom" type="GCopyright">Given zoom level</param>
        /// <returns type="Array"></returns>
    },

    getCopyrightNotice: function() {
        /// <summary>Returns the prefix and all relevant copyright strings that are pertinent for the given map region at the given zoom level. Example: "Imagery (C) 2006 Google, Keyhole"</summary>
        /// <param name="bounds" type="GLatLngBounds">Map region</param>
        /// <param name="zoom" type="GCopyright">Given zoom level</param>
        /// <returns type="string"></returns>
    }
}

﻿GDirections = function(map, panel) {
    /// <summary>Creates a new instance of a directions object to request and store direction results. This directions object can then create directions given a query using the GDirections.load() method.</summary>
    /// <param name="map" optional="true">Optional map object (to display a polyline of the computed directions) and/or a panel DIV element (to display textual direction results. If passed a map argument, whenever a new directions result is computed, the polyline and markers associated with the result are automatically added as overlays on the map.</param>
    /// <param name="panel" optional="true">The textual directions associated with the result are added to the indicated DIV throught this parameter, replacing any existing content in the DIV.</param>
    /// <returns type="Object"></returns>
}

GDirections.prototype =
{
    load: function(query, queryOpts) {
        /// <summary>Returns a string that contains the coordinates of the upper left and the lower right corner points of the box, in this order, separated by comma, surrounded by parentheses.</summary>
        /// <param name="query" type="string">A string containing any valid directions query, e.g. "from: Seattle to: San Francisco" or "from: Toronto to: Ottawa to: New York".</param>
        /// <param name="queryOpts" type="GDirectionsOptions">Direction options for the itinerary informations.</param>
    },

    loadFromWaypoints: function(waypoints, queryOpts) {
        /// <summary>Issues a new directions query using an array of waypoints as input instead of a single query string. This array may contain a maximum of 25 waypoint entries.</summary>
        /// <param name="waypoints" type="Array">Array of string representing an input address or a lat,lng point.</param>
        /// <param name="queryOpts" type="GDirectionsOptions">Direction options for the itinerary informations.</param>
    },

    clear: function() {
        /// <summary>Clears any existing directions results, removes overlays from the map and panel, and cancels any pending load() requests. (Since 2.81)</summary>
    },

    getStatus: function() {
        /// <summary>Returns the status of the directions request. The returned object has the following form: {   code: 200   request: "directions" } The status code can take any of the values defined in GGeoStatusCode. (Since 2.81)</summary>
        /// <returns type="Object"></returns>
    },

    loadFromWaypoints: function(other) {
        /// <summary>Returns true if all parameters in this rectangle are equal to the parameters of the other. (Since 2.98)</summary>
        /// <param name="other" type="GBounds">GBounds to compare</param>
        /// <returns type="Boolean"></returns>
    },

    getBounds: function() {
        /// <summary>This method is used to get the bounding box for the result of this directions query. Returns a GLatLngBounds object or null if no successful result is available. (Since 2.81)</summary>
        /// <returns type="GLatLngBounds"></returns>
    },

    getNumRoutes: function() {
        /// <summary>Returns the number of routes available in the result. For a successful query, this should be the total number of input waypoints minus 1. When no results are available (either because no query was issued or because the previous query was unsuccessful), this method returns 0. (Since 2.81)</summary>
        /// <returns type="Number"></returns>
    },

    getRoute: function(i) {
        /// <summary>Return the GRoute object for the ith route in the response. (Since 2.81)</summary>
        /// <param name="i" type="Number">Index of the route to get.</param>
        /// <returns type="GRoute"></returns>
    },

    getNumGeocodes: function() {
        /// <summary>Returns the number of geocoded entries available in the result. For a successful query, this should be equal to the total number of input waypoints. When no results are available (either because no query was issued or because the previous query was unsuccessful), this method returns 0. (Since 2.81)</summary>
        /// <returns type="Number"></returns>
    },

    getGeocode: function(i) {
        /// <summary>Return the geocoded result for the ith waypoint. The structure of this object is identical to that of a single placemark in a response from the GClientGeocoder object. (Since 2.81)</summary>
        /// <param name="i" type="Number">Index of the geocoded waypoint.</param>
        /// <returns type="Object"></returns>
    },

    getCopyrightsHtml: function() {
        /// <summary>Returns an HTML string containing the copyright information for this result. (Since 2.81)</summary>
        /// <returns type="string"></returns>
    },

    getSummaryHtml: function() {
        /// <summary>Returns an HTML snippet containing a summary of the distance and time for this entire directions request. Note that this summary is the only information returned to a GDirections object constructed without an associated map or DIV element. (Since 2.81)</summary>
        /// <returns type="string"></returns>
    },

    getDistance: function() {
        /// <summary>Returns an object literal representing the total distance of the directions request (across all routes). The object contains two fields: a number called "meters" indicating the numeric value of the distance (in meters), and a string called "html" containing a localized string representation of the distance in the units that are predominant in the starting country of this set of directions. (Since 2.81)</summary>
        /// <returns type="Object"></returns>
    },

    getDuration: function() {
        /// <summary>Returns an object literal representing the total time of the directions request (across all routes). The object contains two fields: a number called "seconds" indicating the numeric value of the time (in seconds), and a string called "html" containing a localized string representation of the time. (Since 2.81)</summary>
        /// <returns type="Object"></returns>
    },

    getPolyline: function() {
        /// <summary>Returns the GPolyline object associated with the entire directions response. Note that there is a single polyline that represents all the routes in the response. This object will be defined only after the directions results have been loaded (i.e. the "load" event has been triggered). (Since 2.81)</summary>
        /// <returns type="GPolyline"></returns>
    },

    getMarker: function() {
        /// <summary>Return the marker associated with the ith geocode. This method will return a non-null value only after the directions results have been loaded (i.e. the "load" event has been triggered). (Since 2.81)</summary>
        /// <param name="i" type="Number">Index of the geocode.</param>
        /// <returns type="GMarker"></returns>
    }
}
﻿GDirectionsOptions = function() {
    /// <field name="locale" type="string">The locale to use for the directions result. For example, "en_US", "fr", "fr_CA", etc.</field>
    /// <field name="travelMode" type="GTravelModes">The mode of travel, such as driving (default) or walking. (Since 2.129)</field>
    /// <field name="avoidHighways" type="string">If true directions will attempt to exclude highways when computing directions. Note that directions may still include highways if there are no viable alternatives. (Since 2.124)</field>
    /// <field name="getPolyline" type="string">By default, the GDirections.load*() methods fetch polyline data only if a map is attached to the GDirections object. This field can be used to override this behavior and retrieve polyline data even when a map is not attached to the Directions object.</field>
    /// <field name="getSteps" type="string">By default, the GDirections.load*() methods fetch steps data only if a panel is attached to the GDirections object. This field can be used to override this behavior and retrieve steps data even when a panel is not attached to the Directions object.</field>
    /// <field name="preserveViewport" type="string">By default, when a Directions object has a map, the map is centered and zoomed to the bounding box of the the directions result. When this option is set to true, the viewport is left alone for this request (unless it was never set in the first place).</field>
}

GDirectionsOptions.prototype =
{
    // ====================================================================================
    // Properties
    // ====================================================================================
    locale: null,
    travelMode: null,
    avoidHighways: null,
    getPolyline: null,
    getSteps: null,
    preserveViewport: null
}
﻿GDownloadUrl = function(url, onload, postBody, postContentType) 
{
	/// <summary>Retrieves the resource from the given URL and calls the onload function with the text of the document as first argument, and the HTTP response status code as the second. If the request times out, the onload function may be called instead with null as the first argument and -1 as the second. This function defaults to sending an HTTP GET request. To send an HTTP POST request instead, pass data within the optional postBody argument. If the data being sent is not of type "application/x-www-form-urlencoded," pass the content type as a string in the postContentType argument. This method is subject to cross-site scripting restrictions. Note that this method uses the underlying XmlHttpRequest implementation of the browser.</summary>
	/// <param name="url" type="String">Url of the resource to be downloaded.</param>
	/// <param name="onload" type="String">Callback that will be fire when the resource will be loaded.</param>
	/// <param name="postBody" type="String" optional="true">(Optional) Data of the POST HTTP Request.</param>
	/// <param name="postContentType" type="String" optional="true">(Optional) Type of the data of the POST HTTP Request.</param>
	/// <returns type="Boolean"></returns>
}
﻿GDraggableObject = function(src, opts) {
    /// <summary>Sets up event handlers so that the source element can be dragged. Left and top optionally position the element, and the optional container serves as a bounding box. (Since 2.59)</summary>
    /// <param name="src"></param>
    /// <param name="opts"></param>
    /// <field name="mousedown">EVENT: This event is fired in response to the DOM mousedown event. Handling this event will prevent the default action of the DOM mousedown event. (Since 2.84)</field>
    /// <field name="mouseup">EVENT: This event is fired in response to the DOM mouseup event on a draggable object. Handling this event will prevent the default action of the DOM mouseup event. (Since 2.84)</field>
    /// <field name="click">EVENT: This event is fired when a draggable object is clicked. (Since 2.84)</field>
    /// <field name="dragstart">EVENT: This event is fired at the start of a draggable object's drag event (when the user initiates a drag by clicking and dragging a draggable object). (Since 2.84)</field>
    /// <field name="drag">EVENT: This event is repeatedly fired while the user drags the draggable object. (Since 2.84)</field>
    /// <field name="dragend">EVENT: This event is fired at the end of a draggable object's drag event (when the user releases a drag). (Since 2.84)</field>
    /// <returns type="Object"></returns>
}

GDraggableObject.prototype =
{
    // ====================================================================================
    // Static Methods
    // ====================================================================================
    setDraggableCursor: function(cursor) {
        /// <summary>STATIC method. Sets the draggable cursor for subsequently created draggable objects. (Since 2.59)                NON STATIC METHOD: Sets the cursor when the mouse is over this draggable object. (Since 2.59)</summary>
        /// <param name="cursor"></param>       
    },

    setDraggingCursor: function(cursor) {
        /// <summary>STATIC method. Sets the dragging cursor for subsequently created draggable objects. (Since 2.59)                NON STATIC METHOD: Sets the cursor when the mouse is held down, dragging this draggable object. (Since 2.59)</summary>
        /// <param name="cursor"></param>
    },

    getDraggingCursor: function() {
        /// <summary>STATIC method. Returns the current dragging cursor in use by the map. If not set through the static setDraggingCursor() method, this returns the default cursor used by the map for its controls and markers. (Since 2.87)</summary>
        /// <returns type="string"></returns>
    },

    getDraggableCursor: function() {
        /// <summary>STATIC method. Returns the current draggable cursor in use by the map. If not set through the static setDraggableCursor() method, this returns the default cursor used by the map for its controls and markers. (Since 2.87)</summary>
        /// <returns type="string"></returns>
    },


    // ====================================================================================
    // Methods
    // ====================================================================================
    moveTo: function(point) {
        /// <summary>Moves the GDraggableObject to a given absolute position. The position is in pixel coordinates relative to the parent node. This method uses the DOM coordinate system, i.e. the X coordinate increases to the left, and the Y coordinate increases downwards. (Since 2.89)</summary>
        /// <param name="point">Given absolute position</param>
    },

    moveBy: function(size) {
        /// <summary>Moves the GDraggableObject by a given size offset. This method uses the DOM coordinate system, i.e. width increases to the left, and height increases downwards. (Since 2.89)</summary>
        /// <param name="point">Given absolute position</param>
    }
}
﻿GDraggableObjectOptions = function() {
    /// <field name="left" type="Number">The left starting position of the object. (Since 2.59)</field>
    /// <field name="top" type="Number">The top starting position of the object. (Since 2.59)</field>
    /// <field name="container" type="Node">A DOM element that will act as a bounding box for the draggable object (Since 2.59)</field>
    /// <field name="draggableCursor" type="string">The cursor to show on mousover. (Since 2.59)</field>
    /// <field name="draggingCursor" type="string">The cursor to show while dragging. (Since 2.59)</field>
    /// <field name="delayDrag" type="Boolean">By default, the event dragstart is fired when the DOM mousedown event is fired on a draggable DOM element. Similarly, the event dragend is fired when the DOM mouseup event is fired. Setting this value to true delays drag events until the mouse has moved from the location where the mousedown or mouseup was generated. The default value for this property is false. (Since 2.84)</field>
}

GDraggableObjectOptions.prototype =
{
    // ====================================================================================
    // Properties
    // ====================================================================================
    left: null,
    top: null,
    container: null,
    draggableCursor: null,
    draggingCursor: null,
    delayDrag: null
}
﻿GEvent = function(src, opts) {
    /// <summary>Sets up event handlers so that the source element can be dragged. Left and top optionally position the element, and the optional container serves as a bounding box. (Since 2.59)</summary>
    /// <param name="src"></param>
    /// <param name="opts"></param>
    /// <field name="clearlisteners">EVENT: This event is fired on object when clearListeners() or clearInstanceListeners() is called on that object. Of course, the event is fired before the functions are executed.</field>
    /// <returns type="Object"></returns>
}

GEvent.prototype =
{
    // ====================================================================================
    // Static Methods
    // ====================================================================================
    addListener: function(source, event, handler) {
        /// <summary>STATIC: Registers an event handler for a custom event on the source object. Returns a handle that can be used to eventually deregister the handler. The event handler will be called with this set to the source object.</summary>
        /// <param name="source"></param>
        /// <param name="event"></param>
        /// <param name="handler"></param>
        /// <returns type="GEventListener"></returns>
    },

    addDomListener: function(source, event, handler) {
        /// <summary>STATIC: Registers an event handler for a DOM event on the source object. The source object must be a DOM Node. Returns a handle that can be used to eventually deregister the handler. The event handler will be called with this set to the source object. This function uses the DOM methods for the current browser to register the event handler.</summary>
        /// <param name="source"></param>
        /// <param name="event"></param>
        /// <param name="handler"></param>
        /// <returns type="GEventListener"></returns>
    },

    removeListener: function(source, event) {
        /// <summary>STATIC: Removes a handler that was installed using addListener() or addDomListener().</summary>
        /// <param name="source"></param>
        /// <param name="event"></param>
    },

    clearListeners: function(handle) {
        /// <summary>STATIC: Removes all handlers on the given object for the given event that were installed using addListener() or addDomListener().</summary>
        /// <param name="handle"></param>
    },

    clearInstanceListeners: function(source) {
        /// <summary>STATIC: Removes all handlers on the given object for all events that were installed using addListener() or addDomListener().</summary>
        /// <param name="source"></param>
    },

    clearNode: function(source) {
        /// <summary>STATIC: Calls clearInstanceListeners on a node and all of its child nodes, recursively.</summary>
        /// <param name="source"></param>
    },

    trigger: function(source, event, methods) {
        /// <summary>STATIC: Fires a custom event on the source object. All remaining optional arguments after event are passed in turn as arguments to the event handler functions.</summary>
        /// <param name="source"></param>
        /// <param name="event"></param>
        /// <param name="methods"></param>
    },

    bind: function(source, event, object, method) {
        /// <summary>STATIC: Registers an invocation of the method on the given object as the event handler for a custom event on the source object. Returns a handle that can be used to eventually deregister the handler.</summary>
        /// <param name="source"></param>
        /// <param name="event"></param>
        /// <param name="object"></param>
        /// <param name="method"></param>
        /// <returns type="GEventListener"></returns>
    },

    bindDom: function(source, event, object, method) {
        /// <summary>STATIC: Registers an invocation of the method on the given object as the event handler for a custom event on the source object. Returns a handle that can be used to eventually deregister the handler.</summary>
        /// <param name="source"></param>
        /// <param name="event"></param>
        /// <param name="object"></param>
        /// <param name="method"></param>
        /// <returns type="GEventListener"></returns>
    },

    callback: function(object, method) {
        /// <summary>STATIC: Returns a closure that calls method on object.</summary>
        /// <param name="object"></param>
        /// <param name="method"></param>
        /// <returns type="Function"></returns>
    },

    callbackArgs: function(object, method, optmethods) {
        /// <summary>STATIC: Returns a closure that calls method on object. All remaining optional arguments after method are passed in turn as arguments method when the returned function is invoked.</summary>
        /// <param name="object"></param>
        /// <param name="method"></param>
        /// <param name="optmethods"></param>
        /// <returns type="Function"></returns>
    }
}
﻿GEventListener = function() {
    /// <summary>This class is opaque. It has no methods and no constructor. Its instances are returned from GEvent.addListener() or GEvent.addDomListener() and are eventually passed back to GEvent.removeListener().</summary>
}
﻿GFactualGeocodeCache = function() {
    /// <summary>Creates a new cache that stores only replies it considers factual. (Since 2.55)</summary>
    /// <returns type="Object"></returns>
}

GFactualGeocodeCache.prototype =
{
    isCachable: function(reply) {
        /// <summary>Overrides the default implementation of this method to perform a more thorough check of the status code. Only a reply with Status.code set to G_GEO_SUCCESS, or known to be invalid, is considered cachable. Replies that timed out or resulted in a generic server error are not cached. (Since 2.55)</summary>
        /// <param name="reply"></param>
        /// <returns type="Boolean"></returns>
    }
}
﻿GGeoAddressAccuracy = function() {
    /// <field name="0" type="Number">Unknown location. (Since 2.59)</field>
    /// <field name="1" type="Number">Country level accuracy. (Since 2.59)</field>
    /// <field name="2" type="Number">Region (state, province, prefecture, etc.) level accuracy. (Since 2.59)</field>
    /// <field name="3" type="Number">Sub-region (county, municipality, etc.) level accuracy. (Since 2.59)</field>
    /// <field name="4" type="Number">Town (city, village) level accuracy. (Since 2.59)</field>
    /// <field name="5" type="Number">Post code (zip code) level accuracy. (Since 2.59)</field>
    /// <field name="6" type="Number">Street level accuracy. (Since 2.59)</field>
    /// <field name="7" type="Number">Intersection level accuracy. (Since 2.59) (Since 2.59)</field>
    /// <field name="8" type="Number">Address level accuracy. (Since 2.59)</field>
    /// <field name="9" type="Number">Premise (building name, property name, shopping center, etc.) level accuracy. (Since 2.59)</field>
}
﻿GGeocodeCache = function() {
    /// <summary>Creates a new cache for storing a map from addresses to locations. The constructor immediately calls the GGeocodeCache.reset method. (Since 2.55)</summary>
    /// <returns type="Object"></returns>
}

GGeocodeCache.prototype =
{
    get: function(address) {
        /// <summary>Returns the reply which was stored under the given address. If no reply was ever stored for the given address, this method returns null. (Since 2.55)</summary>
        /// <param name="address"></param>
        /// <returns type="Object"></returns>
    },

    isCachable: function(reply) {
        /// <summary>Returns whether or not the given reply should be cached. By default very rudimentary checks are performed on the reply object. In particular, this class makes sure that the object is not null and that it has the name field . This method may be overridden by extending classes to provide more precise conditions on the reply object. (Since 2.55)</summary>
        /// <param name="reply"></param>
        /// <returns type="Boolean"></returns>
    },

    put: function(address, reply) {
        /// <summary>Stores the given reply under the given address. This method calls the GGeocodeCache.isCachable method to verify that the reply may be cached. If it gets a go-ahead, it caches the reply under the address normalized with the help of the GGeocodeCache.toCanoninical method. (Since 2.55)</summary>
        /// <param name="address"></param>
        /// <param name="reply"></param>
    },

    reset: function() {
        /// <summary>Purges all replies from the cache. After this method returns, the cache is empty. (Since 2.55)</summary>
    },

    toCanonical: function(address) {
        /// <summary>Returns what is considered a canonical version of the address. It converts the address parameter to lower case, replaces commas with spaces and replaces multiple spaces with one space. (Since 2.55)</summary>
        /// <param name="reply"></param>
        /// <returns type="String"></returns>
    }
}
﻿GGeoStatusCode = function() {
    /// <field name="G_GEO_SUCCESS" type="Number">EQ=200. No errors occurred; the address was successfully parsed and its geocode has been returned. (Since 2.55)</field>
    /// <field name="G_GEO_BAD_REQUEST" type="Number">EQ=400. A directions request could not be successfully parsed. For example, the request may have been rejected if it contained more than the maximum number of waypoints allowed. (Since 2.81)</field>
    /// <field name="G_GEO_SERVER_ERROR" type="Number">EQ=500. A geocoding or directions request could not be successfully processed, yet the exact reason for the failure is not known. (Since 2.55)</field>
    /// <field name="G_GEO_MISSING_QUERY" type="Number">EQ=601. The HTTP q parameter was either missing or had no value. For geocoding requests, this means that an empty address was specified as input. For directions requests, this means that no query was specified in the input. (Since 2.81)</field>
    /// <field name="G_GEO_MISSING_ADDRESS" type="Number">EQ=601. Synonym for G_GEO_MISSING_QUERY. (Since 2.55)</field>
    /// <field name="G_GEO_UNKNOWN_ADDRESS" type="Number">EQ=602. No corresponding geographic location could be found for the specified address. This may be due to the fact that the address is relatively new, or it may be incorrect. (Since 2.55)</field>
    /// <field name="G_GEO_UNAVAILABLE_ADDRESS " type="Number">EQ=603. The geocode for the given address or the route for the given directions query cannot be returned due to legal or contractual reasons. (Since 2.55)</field>
    /// <field name="G_GEO_UNKNOWN_DIRECTIONS " type="Number">EQ=604. The GDirections object could not compute directions between the points mentioned in the query. This is usually because there is no route available between the two points, or because we do not have data for routing in that region. (Since 2.81)</field>
    /// <field name="G_GEO_BAD_KEY " type="Number">EQ=610. The given key is either invalid or does not match the domain for which it was given. (Since 2.55)</field>
    /// <field name="G_GEO_TOO_MANY_QUERIES" type="Number">EQ=620. The given key has gone over the requests limit in the 24 hour period or has submitted too many requests in too short a period of time. If you're sending multiple requests in parallel or in a tight loop, use a timer or pause in your code to make sure you don't send the requests too quickly. (Since 2.55)</field>
}
﻿GGeoXml = function(urlOfXml) {
    /// <summary>Creates a GOverlay that represents that XML file. (Since 2.108)</summary>
    /// <param name="urlOfXml">URL of the xml file</param>
    /// <field name="load">EVENT: This event is fired when either the GGeoXml's XML file has completely loaded and all associated overlays have been displayed on the map, or if the XML file did not load correctly. (Since 2.108)</field>
    /// <returns type="Object"></returns>
}

GGeoXml.prototype =
{
    // ====================================================================================
    // Methods
    // ====================================================================================
    getTileLayerOverlay: function() {
        /// <summary>GGeoXml objects may create a tile overlay for optimization purposes in certain cases. This method returns this tile layer overlay (if available). Note that the tile overlay may be null if not needed, or if the GGeoXml file has not yet finished loading. (Since 2.84)</summary>
        /// <returns type="GTileLayerOverlay"></returns>
    },

    getDefaultCenter: function() {
        /// <summary>Returns the center of the default viewport as a lat/lng. This function should only be called after the file has been loaded. (Since 2.84)</summary>
        /// <returns type="GLatLng"></returns>
    },

    getDefaultSpan: function() {
        /// <summary>Returns the span of the default viewport as a lat/lng. This function should only be called after the file has been loaded. (Since 2.84)</summary>
        /// <returns type="GLatLng"></returns>
    },

    getDefaultBounds: function() {
        /// <summary>Returns the bounding box of the default viewport. This function should only be called after the file has been loaded. (Since 2.84)</summary>
        /// <returns type="GLatLngBounds"></returns>
    },

    gotoDefaultViewport: function(map) {
        /// <summary>Sets the map's viewport to the default viewport of the XML file. (Since 2.84)</summary>
        /// <param name="map"></param>
    },

    hasLoaded: function() {
        /// <summary>Checks to see if the XML file has finished loading, in which case it returns true. If the XML file has not finished loading, this method returns false. (Since 2.84)</summary>
        /// <returns type="Boolean"></returns>
    },

    isHidden: function() {
        /// <summary>Returns true if the GGeoXml object is currently hidden, as changed by the GGeoXml.hide() method. Otherwise returns false. (Since 2.87)</summary>
        /// <returns type="Boolean"></returns>
    },

    loadedCorrectly: function() {
        /// <summary>Checks to see if the XML file has loaded correctly, in which case it returns true. If the XML file has not loaded correctly, this method returns false. If the XML file has not finished loading, this method's return value is undefined. (Since 2.84)</summary>
        /// <returns type="Boolean"></returns>
    },

    supportsHide: function() {
        /// <summary>Always returns true. (Since 2.87)</summary>
        /// <returns type="Boolean"></returns>
    },

    hide: function() {
        /// <summary>Hides the child overlays created by the GGeoXml object if the overlay is both currently visible and the overlay's supportsHide() method returns true. Note that this method will trigger the respective visibilitychanged event for each child overlay that fires that event (e.g. GMarker.visibilitychanged, GGroundOverlay.visibilitychanged, etc.). If no overlays are currently visible that return supportsHide() as true, this method has no effect. (Since 2.87)</summary>
    },

    show: function() {
        /// <summary>Shows the child overlays created by the GGeoXml object, if they are currently hidden. Note that this method will trigger the respective visibilitychanged event for each child overlay that fires that event (e.g. GMarker.visibilitychanged, GGroundOverlay.visibilitychanged). (Since 2.87)</summary>
    }
}
﻿G_GOOGLEBAR_LINK_TARGET_BLANK = null;
G_GOOGLEBAR_LINK_TARGET_PARENT = null;
G_GOOGLEBAR_LINK_TARGET_SELF = null;
G_GOOGLEBAR_LINK_TARGET_TOP = null;

﻿GGoogleBarOptions = function() {
    /// <field name="showOnLoad" type="Boolean">When set to true, this property displays the search box within the GoogleBar (provided the control is enabled and the map is loaded). By default, the search box within the control is hidden and is only expanded upon clicking the control's magnifying glass. (Since 2.95)</field>
    /// <field name="linkTarget" type="GGoogleBarLinkTarget">This property lets you specify the target for links embedded within the search results of the GoogleBar. The default value, G_GOOGLEBAR_LINK_TARGET_BLANK, specifies that links will open within a new window. (Since 2.95)</field>
    /// <field name="resultList" type="Boolean">This property lets you specify the style of the search result list for the GoogleBar, which may be one of the following: G_GOOGLEBAR_RESULT_LIST_INLINE (default) places the result list in a table above the search box, G_GOOGLEBAR_RESULT_LIST_SUPPRESS replaces the list with a set of next/previous buttons, and passing a block-level DOM Element places the list within a container of your choice (typically a <div> element). (Since 2.95)</field>
    /// <field name="suppressInitialResultSelection" type="Boolean">This property suppresses displaying the first result within its own info window upon completion of a search in the GoogleBar (which is the default behavior). (Since 2.95)</field>
    /// <field name="suppressZoomToBounds" type="Boolean">This property suppresses automatic panning and zooming to the set of results upon completion of a search in the GoogleBar. (This property suppresses the default behavior.) (Since 2.95)</field>
    /// <field name="onIdleCallback" type="Function">This property specifies a callback function to be invoked when the GoogleBar finishes searching and the search results are dismissed. (Since 2.95)</field>
    /// <field name="onSearchCompleteCallback" type="Function">This property specifies a callback function to be invoked when the GoogleBar finishes searching and the search completes. It is passed the GlocalSearch object associated with the search control. This callback function is called before results are placed on the map or into the results list. (Since 2.95)</field>
    /// <field name="onGenerateMarkerHtmlCallback" type="Function">This property lets you specify a callback function to be invoked when the info window for a search result marker is opened. The function should be passed a GMarker, generated HTML string, and GlocalSearchResult (in that order) and must return the modified HTML string to be displayed in the info window. (Since 2.95)</field>
    /// <field name="onMarkersSetCallback" type="Function">This property lets you specify a callback function to be invoked when the GGoogleBar completes creation of its markers and places them on the map. This function must be passed an array of objects of the form {result: GlocalSearch, marker: GMarker}. (Since 2.95)</field>
}

GGoogleBarOptions.prototype =
{
    // ====================================================================================
    // Properties
    // ====================================================================================
    showOnLoad: null,
    linkTarget: null,
    resultList: null,
    suppressInitialResultSelection: null,
    suppressZoomToBounds: null,
    onIdleCallback: null,
    onSearchCompleteCallback: null,
    onGenerateMarkerHtmlCallback: null,
    onMarkersSetCallback: null
}
﻿G_GOOGLEBAR_RESULT_LIST_INLINE = null;
G_GOOGLEBAR_RESULT_LIST_SUPPRESS = null;

﻿GGroundOverlay = function(imageUrl, bounds) {
    /// <summary>Creates a ground overlay from an image URL and its bounds. (Since 2.79)</summary>
    /// <param name="imageUrl" type="string">URL of the image</param>
    /// <param name="bounds" type="GLatLngBounds">Bounds to display the image</param>
    /// <returns type="Object"></returns>
}

GGroundOverlay.prototype =
{
    // ====================================================================================
    // Methods
    // ====================================================================================
    hide: function() {
        /// <summary>Hides the ground overlay if it is currently visible. Note that this function triggers the event GGroundOverlay.visibilitychanged in case the ground overlay is currently visible. (Since 2.87)</summary>
    },

    isHidden: function() {
        /// <summary>Returns true if the ground overlay is currently hidden. Otherwise returns false. (Since 2.87)</summary>
        /// <returns type="Boolean"></returns>
    },

    show: function() {
        /// <summary>Shows the ground overlay if it is currently hidden. Note that this function triggers the event GGroundOverlay.visibilitychanged in case the ground overlay is currently hidden. (Since 2.87)</summary>
    },

    supportsHide: function() {
        /// <summary>Always returns true. (Since 2.87)</summary>
        /// <returns type="Boolean"></returns>
    }
}
﻿GHierarchicalMapTypeControl = function() {
    /// <summary>Creates a "nested" map type control for selecting and switching between supported map types via buttons and nested checkboxes.</summary>
    /// <returns type="GControl"></returns>
}

GHierarchicalMapTypeControl.prototype =
{
    addRelationship: function(parentType, childType, childText, isDefault) {
        /// <summary>Registers a parent/child relationship between map types with the control. If childText is given, it will be displayed next to the checkbox for the child map type instead of its name. If isDefault is true, the child map type will be selected by default. Note that all relationships must be set up before the control is added. (Adding relationships after the control is added will have no effect.) (Since 2.94).</summary>
        /// <param name="parentType" type="GMapType">The parent map type.</param>
        /// <param name="childType" type="GMapType">The child map type.</param>
        /// <param name="childText" type="String" optional="true">(optional) Text to be displayed next to the checkbox for the child map type instead of its name.</param>
        /// <param name="isDefault" type="Boolean" optional="true">(optional) If true, the child map type will be selected by default.</param>
    },

    removeRelationship: function(mapType) {
        /// <summary>Removes all relationships involving a map type from the control. (Since 2.94)</summary>
        /// <param name="mapType" type="GMapType">The map type to remove.</param>
    },

    clearRelationships: function() {
        /// <summary>Removes all relationships from the control. (Since 2.94)</summary>
    },

    printable: function() {
        /// <summary>Returns to the map if the control should be printable.</summary>
        /// <returns type="Boolean"></returns>
    },

    selectable: function() {
        /// <summary>Returns to the map if the control contains selectable text.</summary>
        /// <returns type="Boolean"></returns>
    },

    initialize: function(map) {
        /// <summary>Will be called by the map so the control can initialize itself. The control will use the method GMap2.getContainer() to get hold of the DOM element that contains the map, and add itself to it. It returns the added element.</summary>
        /// <param name="map" type="GMap2">The map to initialize.</param>
        /// <returns domElement="true"></returns>
    },

    getDefaultPosition: function() {
        /// <summary>Returns to the map the position in the map view at which the control appears by default. This will be overridden by the second argument to GMap2.addControl().</summary>
        /// <returns type="	GControlPosition"></returns>
    }
}
﻿GIcon = function(copy, image) {
    /// <summary>Creates a new icon object. If another icon is given in the optional copy argument, its properties are copied, otherwise they are left empty. The optional argument image sets the value of the image  property.</summary>
    /// <param name="copy" type="GIcon" optional="true">(optional) The icon to copy. Note that you can use the default Maps icon G_DEFAULT_ICON if you don't want to specify your own.</param>
    /// <param name="image" type="String" optional="true">(optional) The foreground image URL of the icon.</param>
    /// <field name="image" type="String">The foreground image URL of the icon.</field>
    /// <field name="shadow" type="String">The shadow image URL of the icon.</field>
    /// <field name="iconSize" type="GSize">The pixel size of the foreground image of the icon.</field>
    /// <field name="shadowSize" type="GSize">The pixel size of the shadow image.</field>
    /// <field name="iconAnchor" type="GPoint">The pixel coordinate relative to the top left corner of the icon image at which this icon is anchored to the map.</field>
    /// <field name="infoWindowAnchor" type="GPoint">The pixel coordinate relative to the top left corner of the icon image at which the info window is anchored to this icon.</field>
    /// <field name="printImage" type="String">The URL of the foreground icon image used for printed maps. It must be the same size as the main icon image given by image.</field>
    /// <field name="mozPrintImage" type="String">The URL of the foreground icon image used for printed maps in Firefox/Mozilla. It must be the same size as the main icon image given by image.</field>
    /// <field name="printShadow" type="String">The URL of the shadow image used for printed maps. It should be a GIF image since most browsers cannot print PNG images.</field>
    /// <field name="transparent" type="String">The URL of a virtually transparent version of the foreground icon image used to capture click events in Internet Explorer. This image should be a 24-bit PNG version of the main icon image with 1% opacity, but the same shape and size as the main icon.</field>
    /// <field name="imageMap" type="elementInteger">An array of integers representing the x/y coordinates of the image map we should use to specify the clickable part of the icon image in browsers other than Internet Explorer.</field>
    /// <field name="maxHeight" type="Number" integer="true">An array of integers representing the x/y coordinates of the image map we should use to specify the clickable part of the icon image in browsers other than Internet Explorer.</field>
    /// <field name="dragCrossImage" type="String">Specifies the cross image URL when an icon is dragged. (Since 2.79)</field>
    /// <field name="dragCrossSize" type="GSize">Specifies the pixel size of the cross image when an icon is dragged. (Since 2.79)</field>
    /// <field name="dragCrossAnchor" type="GPoint">Specifies the pixel coordinate offsets (relative to the iconAnchor) of the cross image when an icon is dragged. (Since 2.79)</field>
    /// <returns type="Object"></returns>
}

G_DEFAULT_ICON = {};

GIcon.prototype =
{
    image: null,
    shadow: null,
    iconSize: null,
    shadowSize: null,
    iconAnchor: null,
    infoWindowAnchor: null,
    printImage: null,
    mozPrintImage: null,
    printShadow: null,
    transparent: null,
    imageMap: null,
    maxHeight: null,
    dragCrossImage: null,
    dragCrossSize: null,
    dragCrossAnchor: null
}
﻿GInfoWindow = function() {
    /// <summary>
    ///	GInfoWindow has no constructor. It is created by the map and accessed by its method GMap2.getInfoWindow().
    /// </summary>	
}

GInfoWindow.prototype =
{
    selectTab: function(index) {
        /// <summary>
        ///	Selects the tab with the given index. This has the same effect as clicking on the corresponding tab.
        /// </summary>
        /// <param name="index" type="Number" integer="true">The index to select</param>
    },

    hide: function() {
        /// <summary>
        ///	Makes the info window invisible. NOTE: This doesn't close the info window. It can be made visible again using show().
        /// </summary>
    },

    show: function() {
        /// <summary>
        ///	Makes the info window visible if its currently invisible.
        /// </summary>
    },

    isHidden: function() {
        /// <summary>
        ///	Returns true if the info window is hidden. This includes the state that it's closed.
        /// </summary>
        /// <returns type="Boolean"></returns>
    },

    reset: function(latlong, tabs, size, offset, selectedTab) {
        /// <summary>
        ///	Resets the state of the info window. Each argument may be null and then its value will not be changed from the current value.
        /// </summary>
        /// <param name="latlong" type="GLatLng">The Lat/Long to reset</param>
        /// <param name="tabs" type="GInfoWindowTab">The tabs to reset</param>
        /// <param name="size" type="GSize">The size to reset</param>
        /// <param name="offset" type="GSize" optional="true">(optional) The offset to reset</param>
        /// <param name="selectedTab" type="Number" integer="true">The selected index to reset</param>
    },

    getPoint: function() {
        /// <summary>
        ///	Returns the geographical point at which the info window is anchored. The tip of the window points to this point on the map, modulo the pixel offset.
        /// </summary>
        /// <returns type="GLatLng"></returns>
    },

    getPixelOffset: function() {
        /// <summary>
        ///	Returns the offset, in pixels, of the tip of the info window from the point on the map at whose geographical coordinates the info window is anchored.
        /// </summary>
        /// <returns type="GSize"></returns>
    },

    getSelectedTab: function() {
        /// <summary>
        ///	Returns the index, starting at 0, of the current selected tab.
        /// </summary>
        /// <returns type="Number" integer="true"></returns>
    },

    getTabs: function() {
        /// <summary>
        ///	Returns the array of tabs in this info window. (Since 2.59)
        /// </summary>
        /// <returns type="GInfoWindowTabs[]"></returns>
    },

    getContentContainers: function() {
        /// <summary>
        ///	Returns the array of DOM nodes that hold the content of the tabs of this info window. (Since 2.59)
        /// </summary>
        /// <returns type="elementDomElement"></returns>
    },

    enableMaximize: function() {
        /// <summary>
        ///	Enables maximization of the info window. A maximizable info window expands to fill most of the map with contents specified via the maxContent and maxTitle  properties of GInfoWindowOptions. The info window must have been opened with maxContent or maxTitle options in order for enableMaximize() or disableMaximize  to have any effect. An info window opened with maxContent or maxTitle will have maximization enabled by default. (Since 2.93)
        /// </summary>
    },

    disableMaximize: function() {
        /// <summary>
        ///	Disables maximization of the info window. The infowindow must have been opened with maxContent or maxTitle options. Note that if the info window is currently opened, this function will remove the maximize buton but will not restore the window to its minimized state. (Since 2.93)
        /// </summary>
    },

    maximize: function() {
        /// <summary>
        ///	Maximizes the infowindow. The infowindow must have been opened with maxContent or maxTitle options, and it must not have had its maximization disabled through disableMaximize. (Since 2.93).
        /// </summary>
    },

    restore: function() {
        /// <summary>
        ///	Restores the info window to its default (non-maximized) state. The infowindow must have been opened with maxContent or maxTitle options. (Since 2.93).
        /// </summary>
    }
}
﻿GInfoWindowOptions = function() {
    /// <field name="selectedTab" type="Number">Selects the tab with the given index, starting at 0, instead of the first tab (with index 0).</field>
    /// <field name="maxWidth" type="Number">Maximum width of the info window content, in pixels.</field>
    /// <field name="noCloseOnClick" type="Boolean">Indicates whether or not the info window should close for a click on the map that was not on a marker. If set to true, the info window will not close when the map is clicked. The default value is false. (Since 2.83)</field>
    /// <field name="onOpenFn" type="Function">Function is called after the info window is opened and the content is displayed.</field>
    /// <field name="onCloseFn" type="Function">Function is called when the info window is closed.</field>
    /// <field name="zoomLevel" type="Number">Pertinent for showMapBlowup() only. The zoom level of the blowup map in the info window.</field>
    /// <field name="mapType" type="GMapType">Pertinent for showMapBlowup() only. The map type of the blowup map in the info window.</field>
    /// <field name="maxContent" type="String">Specifies content to be shown when the infowindow is maximized. The content may be either an HTML string or an HTML DOM element. (Since 2.93)</field>
    /// <field name="maxTitle" type="String">Specifies title to be shown when the infowindow is maximized. The content may be either an HTML string or an HTML DOM element. (Since 2.93)</field>
    /// <field name="pixelOffset" type="GSize">Specifies a number of pixels in the up (x) and right (y) direction to move the infowindow away from the given GLatLng. (Since 2.98)</field>
}

GInfoWindowOptions.prototype =
{
    // ====================================================================================
    // Properties
    // ====================================================================================
    selectedTab: null,
    maxWidth: null,
    noCloseOnClick: null,
    onOpenFn: null,
    onCloseFn: null,
    zoomLevel: null,
    mapType: null,
    maxContent: null,
    maxTitle: null,
    pixelOffset: null
}
﻿GInfoWindowTab = function(label, content) {
    /// <summary>Creates an info window tab data structure that can be passed in the tabs argument to openInfoWindowTabs*() methods.</summary>
    /// <param name="label">Label that will be displayed on the tab.</param>
    /// <param name="content">Content of the tab</param>
    /// <returns type="Object"></returns>
}
﻿GKeyboardHandler = function(map) {
    /// <summary>Instantiate this class to add keyboard bindings to a map. The key bindings are the same as for the maps application.</summary>
    /// <param name="map" type="GMap2">The Google map object</param>
}

﻿GLargeMapControl = function() {
    /// <summary>Creates a control with buttons to pan in four directions, and zoom in and zoom out, and a zoom slider.</summary>
    /// <returns type="GControl"></returns>
}

GLargeMapControl.prototype = new GControl();
﻿GLatLng = function(lat, lng, unbounded) {
    /// <summary>GLatLng is a point in geographical coordinates longitude and latitude. Notice the ordering of latitude and longitude. If the unbounded flag is true, then the numbers will be used as passed, otherwise latitude will be clamped to lie between -90 degrees and +90 degrees, and longitude will be wrapped to lie between -180 degrees and +180 degrees.</summary>
    /// <param name="lat" type="Number" >The latitude coordinate in degrees, as a number between -90 and +90.</param>
    /// <param name="lng" type="Number" >The longitude coordinate in degrees, as a number between -180 and +180.</param>
    /// <param name="unbounded" type="Boolean" >(optional) If true, then the numbers will be used as passed, otherwise latitude will be clamped to lie between -90 degrees and +90 degrees, and longitude will be wrapped to lie between -180 degrees and +180 degrees.</param>
    /// <returns type="Object"></returns>
}

GLatLng.prototype =
{
    lat: function() {
        /// <summary>Returns the latitude coordinate in degrees, as a number between -90 and +90. If the unbounded flag was set in the constructor, this coordinate can be outside this interval.</summary>
        /// <returns type="Number"></returns>
    },

    lng: function() {
        /// <summary>Returns the longitude coordinate in degrees, as a number between -180 and +180. If the unbounded flag was set in the constructor, this coordinate can be outside this interval.</summary>
        /// <returns type="Number"></returns>
    },

    latRadians: function() {
        /// <summary>Returns the latitude coordinate in radians, as a number between -PI/2 and +PI/2. If the unbounded flag was set in the constructor, this coordinate can be outside this interval.</summary>
        /// <returns type="Number"></returns>
    },

    lngRadians: function() {
        /// <summary>Returns the longitude coordinate in radians, as a number between -PI and +PI. If the unbounded flag was set in the constructor, this coordinate can be outside this interval.</summary>
        /// <returns type="Number"></returns>
    },

    equals: function(other) {
        /// <summary>Returns true iff the other size has equal components, within certain roundoff margins.</summary>
        /// <param name="other" type="GLatLng">The Lat/Long to compare.</param>
        /// <returns type="Boolean"></returns>
    },

    distanceFrom: function(other, radius) {
        /// <summary>Returns the distance, in meters, from this point to the given point. By default, this distance is calculated given the default equatorial earth radius of 6378137 meters. The earth is approximated as a sphere, hence the distance could be off as much as 0.3%, especially in the polar extremes. You may also pass an optional radius  argument to calculate distances between GLatLng coordinates on spheres of a different radius than earth. (Since 2.89).</summary>
        /// <param name="other" type="GLatLng">The Lat/Long to compare.</param>
        /// <param name="radius" type="Number" optional="true">(optional) The radus to calculate distances between.</param>
        /// <returns type="Number"></returns>
    },

    toUrlValue: function(precision) {
        /// <summary>Returns a string that represents this point in a format suitable for use as a URL parameter value, separated by a comma, without whitespace. By default, precision is returned to 6 digits, which corresponds to a resolution to 4 inches/ 11 centimeters. An optional precision  parameter allows you to specify a lower precision to reduce server load. Note: prior to 2.78, this  precision parameter was not available. (Since 2.78).</summary>
        /// <param name="precision" type="Number" optional="true">(optional) The precision to return.</param>
        /// <returns type="String"></returns>
    }
}
﻿GLatLngBounds = function(sw, ne) {
    /// <summary>Constructs a rectangle from the points at its south-west and north-east corners.</summary>
    /// <param name="sw" type="GLatLng">South-West point that describes the rectangle.</param>
    /// <param name="ne" type="GLatLng">North-East point that describes the rectangle.</param>
    /// <returns type="Object"></returns>
}

GLatLngBounds.prototype =
{
    // ====================================================================================
    // Methods
    // ====================================================================================
    equals: function(other) {
        /// <summary>Returns true iff all parameters in this rectangle are equal to the parameters of the other, within a certain roundoff margin.</summary>
        /// <param name="other" type="GLatLngBounds">Other rectangle to compare with.</param>
        /// <returns type="Boolean"></returns>      
    },

    containsLatLng: function(latlng) {
        /// <summary>Returns true iff the geographical coordinates of the point lie within this rectangle. (Since 2.88)</summary>
        /// <param name="latlng" type="GLatLng">Point to check.</param>
        /// <returns type="Boolean"></returns>  
    },

    intersects: function(other) {
        /// <summary>What the name says.</summary>
        /// <param name="other" type="GLatLngBounds">Other rectangle to compare with.</param>
        /// <returns type="Boolean"></returns>
    },

    containsBounds: function(other) {
        /// <summary>What the name says.</summary>
        /// <param name="other" type="GLatLngBounds">Other rectangle to compare with.</param>
        /// <returns type="Boolean"></returns>
    },

    extend: function(latlng) {
        /// <summary>Enlarges this rectangle such that it contains the given point. In longitude direction, it is enlarged in the smaller of the two possible ways. If both are equal, it is enlarged at the eastern boundary.</summary>
        /// <param name="latlng" type="GLatLng">Point for the extension.</param>
    },

    getSouthWest: function() {
        /// <summary>Returns the point at the south-west corner of the rectangle.summary>
        /// <returns type="GLatLng"></returns>
    },

    getNorthEast: function() {
        /// <summary>Returns the point at the north-east corner of the rectangle.<summary>
        /// <returns type="GLatLng"></returns>
    },

    toSpan: function() {
        /// <summary>Returns a GLatLng whose coordinates represent the size of this rectangle.<summary>
        /// <returns type="GLatLng"></returns>
    },

    isFullLat: function() {
        /// <summary>Returns true if this rectangle extends from the south pole to the north pole.</summary>
        /// <returns type="Boolean"></returns>
    },

    isFullLng: function() {
        /// <summary>Returns true if this rectangle extends fully around the earth in the longitude direction.</summary>
        /// <returns type="Boolean"></returns>
    },

    isEmpty: function() {
        /// <summary>Returns true if this rectangle is empty.</summary>
        /// <returns type="Boolean"></returns>
    },

    getCenter: function() {
        /// <summary>Returns the point at the center of the rectangle. (Since 2.52)</summary>
        /// <returns type="GLatLng"></returns>
    }
}
﻿GLayer = function(layerId) {
    /// <summary>Creates a layer using the given unique Layer ID. http://spreadsheets.google.com/pub?key=p9pdwsai2hDN-cAocTLhnag contains a list of the currently supported layers.</summary>
    /// <param name="layerId" optional="true">Optional map object (to display a polyline of the computed directions) and/or a panel DIV element (to display textual direction results. If passed a map argument, whenever a new directions result is computed, the polyline and markers associated with the result are automatically added as overlays on the map.</param>
    /// <returns type="Object"></returns>
}

GLayer.prototype =
{
    hide: function() {
        /// <summary>Hides this overlay so it is not visible, but maintains its position in the stack of overlays.</summary>
    },

    show: function() {
        /// <summary>Shows a previously hidden GLayer.</summary>
    },

    isHidden: function(layerId) {
        /// <summary>STATIC: Returns true if the layer overlay is hidden or was not added to the map using the GMap2.addOverlay() method. Otherwise returns false.</summary>
        /// <returns type="Boolean"></returns>
    }
}
﻿GLog = function(STATIC_CLASS) {
    /// <summary>STATIC CLASS</summary>
}

GLog.prototype =
{
    // ====================================================================================
    // Static Methods
    // ====================================================================================
    write: function(message, color) {
        /// <summary>STATIC: Writes the message as plain text into the log window. HTML markup characters will be escaped so that they are visible as characters.</summary>
        /// <param name="message"></param>
        /// <param name="color"></param>
    },

    writeUrl: function(url) {
        /// <summary>STATIC: Writes a link to the given URL into the log window.</summary>
        /// <param name="url"></param>
    },

    write: function(html) {
        /// <summary>STATIC: Writes text as HTML in the log window.</summary>
        /// <param name="html"></param>
    }
}
﻿GMap2 = function(container, opts) {
    /// <summary>Creates a new map inside of the given HTML container, which is typically a DIV element.</summary>
    /// <param name="container" type="String">Required. The ID of the HTML control that will contain the map.</param>
    /// <param name="opts" type="GMapOptions">Options of the map.</param>       
}

GMap2.prototype =
{
    // ====================================================================================
    // Methods
    // ====================================================================================
    enableDragging: function() {
        /// <summary>Enables the dragging of the map (enabled by default).</summary>
    },

    disableDragging: function() {
        /// <summary>Disables the dragging of the map.</summary>
    },

    draggingEnabled: function() {
        /// <summary>Returns true if the dragging of the map is enabled.</summary>
        /// <returns type="Boolean"></returns>
    },

    enableInfoWindow: function() {
        /// <summary>Enables info window operations on the map (enabled by default).</summary>
    },

    disableInfoWindow: function() {
        /// <summary>Closes the info window, if it is open, and disables the opening of a new info window.</summary>
    },

    infoWindowEnabled: function() {
        /// <summary>Returns true iff the info window is enabled.</summary>
        /// <returns type="Boolean"></returns>
    },

    enableDoubleClickZoom: function() {
        /// <summary>Enables info window operations on the map (enabled by default).</summary>
        ///none	Enables double click to zoom in and out (disabled by default). (Since 2.58)
    },

    disableDoubleClickZoom: function() {
        /// <summary>Disables double click to zoom in and out. (Since 2.58)</summary>
    },

    doubleClickZoomEnabled: function() {
        /// <summary>Returns true if double click to zoom is enabled. (Since 2.58)</summary>
        /// <returns type="Boolean"></returns>
    },

    enableContinuousZoom: function() {
        /// <summary>Enables continuous smooth zooming for select browsers (disabled by default). (Since 2.58)</summary>
    },

    disableContinuousZoom: function() {
        /// <summary>Disables continuous smooth zooming. (Since 2.58)</summary>
    },

    continuousZoomEnabled: function() {
        /// <summary>Returns true if continuous smooth zooming is enabled. (Since 2.58)</summary>
        /// <returns type="Boolean"></returns>
    },

    enableGoogleBar: function() {
        /// <summary>Enables the GoogleBar, an integrated search control, to the map. When enabled, this control takes the place of the default Powered By Google logo. Note that this control is not enabled by default. (Since 2.92)</summary>
    },

    disableGoogleBar: function() {
        /// <summary>Disables the GoogleBar integrated search control. When disabled, the default Powered by Google logo occupies the position formerly containing this control. Note that this control is already disabled by default. (Since 2.92)</summary>
    },

    enableScrollWheelZoom: function() {
        /// <summary>Enables zooming using a mouse's scroll wheel. Note: scroll wheel zoom is disabled by default. (Since 2.78)</summary>
    },

    disableScrollWheelZoom: function() {
        /// <summary>Disables zooming using a mouse's scroll wheel. Note: scroll wheel zoom is disabled by default. (Since 2.78)</summary>
    },

    scrollWheelZoomEnabled: function() {
        /// <summary>Returns a Boolean indicating whether scroll wheel zooming is enabled. (Since 2.78)</summary>
        /// <returns type="Boolean"></returns>
    },



    // ====================================================================================
    // Modify the Map Types
    // ====================================================================================

    getMapTypes: function() {
        /// <summary>Returns the array of map types registered with this map.</summary>
        /// <returns type="GMapType[]"></returns>
    },

    getCurrentMapType: function() {
        /// <summary>Returns the currently selected map type.</summary>
        /// <returns type="GMapType"></returns>
    },

    setMapType: function(type) {
        /// <summary>Selects the given new map type. The type must be known to the map. See the constructor, and the method addMapType().</summary>
        /// <param name="type" type="GMapType">The map type to set</param>
    },

    addMapType: function(type) {
        /// <summary>Adds a new map type to the map. See section GMapType for how to define custom map types.</summary>
        /// <param name="type" type="GMapType">The map type to add</param>
    },

    removeMapType: function(type) {
        /// <summary>Removes the map type from the map. Will update the set of buttons displayed by the GMapTypeControl or GHierarchicalMapTypeControl and fire the removemaptype event.</summary>
        /// <param name="type" type="GMapType">The map type to remove</param>
    },



    // ====================================================================================
    // Map Types
    // ====================================================================================

    isLoaded: function() {
        /// <summary>Returns true if the map was initialized by setCenter() since it was created.</summary>
        /// <returns type="Boolean"></returns>
    },

    getCenter: function() {
        /// <summary>Returns the geographical coordinates of the center point of the map view.</summary>
        /// <returns type="GLatLng"></returns>
    },

    getBounds: function() {
        /// <summary>Returns the the visible rectangular region of the map view in geographical coordinates.</summary>
        /// <returns type="GLatLngBounds"></returns>
    },

    getBoundsZoomLevel: function(bounds) {
        /// <summary>Returns the zoom level at which the given rectangular region fits in the map view. The zoom level is computed for the currently selected map type. If no map type is selected yet, the first on the list of map types is used.</summary>
        /// <returns type="Number" integer="true"></returns>
        /// <param name="bounds" type="GLatLngBounds">The lat/long bounds</param>
    },

    getSize: function() {
        /// <summary>Returns the size of the map view in pixels.</summary>
        /// <returns type="GSize"></returns>
    },

    getZoom: function() {
        /// <summary>Returns the current zoom level.</summary>
        /// <returns type="Number"></returns>
    },

    getDragObject: function() {
        /// <summary>Returns the draggable object used by this map. (Since 2.93)</summary>
        /// <returns type="GDraggableObject"></returns>
    },



    // ====================================================================================
    // Modify the Map State
    // ====================================================================================

    setCenter: function(center, zoom, type) {
        /// <summary>Sets the map view to the given center. Optionally, also sets zoom level and map type.</summary>
        /// <param name="center" type="GLatLng">An GLatLng element of the center</param>
        /// <param name="zoom" type="Number">Zoom level to be applied.</param>
        /// <param name="type" type="GMapType">Map type to be applied. The map type must be known to the map. See the constructor, and the method addMapType().</param>
    },

    panTo: function(center) {
        /// <summary>Changes the center point of the map to the given point. If the point is already visible in the current map view, change the center in a smooth animation.</summary>
        /// <param name="center" type="GLatLng">An GLatLng element of the center</param>
    },

    panBy: function(distance) {
        /// <summary>Starts a pan animation by the given distance in pixels.</summary>
        /// <param name="distance" type="Number">Given distance in pixels</param>
    },

    panDirection: function(dx, dy) {
        /// <summary>Starts a pan animation by half the width of the map in the indicated directions. +1 is right and down, -1 is left and up, respectively.</summary>
        /// <param name="dx" type="Number"></param>
        /// <param name="dy" type="Number"></param>
    },

    setZoom: function(level) {
        /// <summary>Sets the zoom level to the given new value.</summary>
        /// <param name="level" type="Number">Zoom level to be applied</param>
    },

    zoomIn: function() {
        /// <summary>Increments zoom level by one.</summary>
    },

    zoomOut: function() {
        /// <summary>Decrements zoom level by one.</summary>
    },

    savePosition: function() {
        /// <summary>Stores the current map position and zoom level for later recall by returnToSavedPosition().</summary>
    },

    returnToSavedPosition: function() {
        /// <summary>Restores the map view that was saved by savePosition().</summary>
    },

    checkResize: function() {
        /// <summary>Notifies the map of a change of the size of its container. Call this method after the size of the container DOM object has changed, so that the map can adjust itself to fit the new size.</summary>
    },



    // ====================================================================================
    // Overlays
    // ====================================================================================
    addOverlay: function(overlay) {
        /// <summary>Adds an overlay to the map and fires the addoverlay event.</summary>
        /// <param name="overlay" type="GOverlay">All objects that implements GOverlay interface : GMarker, GPolyline, GTileLayerOverlay or GInfoWindow</param>
    },

    removeOverlay: function(overlay) {
        /// <summary>Removes the overlay from the map. If the overlay was on the map, it fires the removeoverlay event.</summary>
        /// <param name="overlay" type="GOverlay">All objects that implements GOverlay interface : GMarker, GPolyline, GTileLayerOverlay or GInfoWindow</param>
    },

    clearOverlays: function() {
        /// <summary>Removes all overlay from the map, and fires the clearoverlays event.</summary>
    },

    getPane: function(pane) {
        /// <summary>Returns a DIV that holds the object in the layer identified by pane.</summary>
        /// <param name="pane" type="String">Layer that contains the object</param>
        /// <returns type="Node"></returns>
    },



    // ====================================================================================
    // Coordinate Transformations
    // ====================================================================================
    fromContainerPixelToLatLng: function(pixel) {
        /// <summary>Computes the geographical coordinates of the point at the given pixel coordinates in the DOM element that contains the map on the page.</summary>
        /// <param name="pixel" type="GPoint">Pixel coordinates in the DOM element that contains the map.</param>
        /// <returns type="GLatLng"></returns>
    },

    fromLatLngToContainerPixel: function(latlng) {
        /// <summary>Computes the pixel coordinates of the given geographical point in the DOM element that contains the map on the page. (Since 2.100)</summary>
        /// <param name="latlng" type="GLatLng">Geographical point.</param>
        /// <returns type="GPoint"></returns>
    },

    fromLatLngToDivPixel: function(latlng) {
        /// <summary>Computes the pixel coordinates of the given geographical point in the DOM element that holds the draggable map. You need this method to position a custom overlay when you implement the GOverlay.redraw() method for a custom overlay.</summary>
        /// <param name="latlng" type="GLatLng">Geographical point.</param>
        /// <returns type="GPoint"></returns>
    },

    fromDivPixelToLatLng: function(pixel) {
        /// <summary>Computes the geographical coordinates from pixel coordinates in the div that holds the draggable map. This may be helpful for when you implement interaction with custom overlays that don't extend the GOverlay interface. If this doesn't give you the expected output, try the fromContainerPixelToLatLng method instead.</summary>
        /// <param name="pixel" type="GPoint">Pixel coordinates in the DIV that holds the draggable map.</param>
        /// <returns type="GLatLng"></returns>
    },



    // ====================================================================================
    // Info Window
    // ====================================================================================
    openInfoWindow: function(latlng, node, opts) {
        /// <summary>Opens a simple info window at the given point.</summary>
        /// <param name="latlng" type="GLatLng">Geographical Point.</param>
        /// <param name="node" type="String">The content of the info window is given as a DOM node.</param>
        /// <param name="opts"></param>
    },

    openInfoWindowHtml: function(latlng, html, opts) {
        /// <summary>Opens a simple info window at the given point.</summary>
        /// <param name="latlng" type="GLatLng">Geographical Point.</param>
        /// <param name="html" type="String">The content of the info window is given as HTML text.</param>
        /// <param name="opts"></param>
    },

    openInfoWindowTabs: function(latlng, html, opts) {
        /// <summary>Opens a tabbed info window at the given point.</summary>
        /// <param name="latlng" type="GLatLng">Geographical Point.</param>
        /// <param name="tabs" type="String">The content of the info window is given as DOM nodes.</param>
        /// <param name="opts"></param>
    },

    openInfoWindowTabsHtml: function(latlng, html, opts) {
        /// <summary>Opens a simple info window at the given point.</summary>
        /// <param name="latlng" type="GLatLng">Geographical Point.</param>
        /// <param name="html" type="String">The content of the info window is given as HTML text.</param>
        /// <param name="opts"></param>
    },

    showMapBlowup: function(latlng, opts) {
        /// <summary>Opens an info window at the given point that contains a closeup view on the map around this point.</summary>
        /// <param name="latlng" type="GLatLng">Geographical Point.</param>
        /// <param name="opts"></param>
    },

    updateCurrentTab: function(modifier, onupdate) {
        /// <summary>Updates the content of the currently open GInfoWindow object, without repositioning. The info window is resized to fit the new content. (Since 2.85)</summary>
        /// <param name="modifier">The modifier function is used to modify the currently selected tab and is passed a GInfoWindowTab as an argument.</param>
        /// <param name="onupdate">The optional onupdate callback function is called after the info window displays the new content.</param>
    },

    clearOverlays: function() {
        /// <summary>Closes the currently open info window.</summary>
    },

    getInfoWindow: function() {
        /// <summary>Returns the info window object of this map. If no info window exists yet, it is created, but not displayed. This operation is not influenced by enableInfoWindow().</summary>
        /// <returns type="GInfoWindow"></returns>
    }
}

﻿GMapOptions = function() {
    /// <summary>Creates a new map inside of the given HTML container, which is typically a DIV element.</summary>
    /// <field name="size" type="GSize">Sets the size in pixels of the map.</field>
    /// <field name="mapTypes" type="GMapType[]">Array of map types to be used by this map. By default, G_DEFAULT_MAP_TYPES is used.</field>       
    /// <field name="draggableCursor" type="String">The cursor to display when the map is draggable. (Since 2.59)</field>
    /// <field name="draggingCursor" type="String">The cursor to display while dragging the map. (Since 2.59)</field>
    /// <field name="googleBarOptions" type="GGoogleBarOptions">This property specifies the options to configure the GGoogleBar search control.</field>
}

GMapOptions.prototype =
{
    size: null,
    mapTypes: null,
    draggableCursor: null,
    draggingCursor: null,
    googleBarOptions: null,


    toString: function() {
        /// <summary>Returns a string that contains the wdith and height parameter, in this order, separated by a comma.</summary>
        /// <returns type="String"></returns>
    }
}


﻿G_MAP_MAP_PANE = null;
G_MAP_MARKER_SHADOW_PANE = null;
G_MAP_MARKER_PANE = null;
G_MAP_FLOAT_SHADOW_PANE = null;
G_MAP_MARKER_MOUSE_TARGET_PANE = null;
G_MAP_FLOAT_PANE = null;

﻿GMapTypeControl = function(useShortNames) {
    /// <summary>Creates a standard map type control for selecting and switching between supported map types via buttons.</summary>
    /// <param name="useShortNames" type="Boolean" optional="true">(Optional) If true use the short (alt) names for the map types else long names by default.</param>
    /// <returns type="GControl"></returns>
}

GMapTypeControl.prototype = new GControl();
﻿GMarker = function(latlong, opts) {
    /// <summary>
    ///	1. GMarker(latlng, opts) - Creates a marker at the latlng with options specified in GMarkerOptions. By default markers are clickable & have the default icon G_DEFAULT_ICON. (Since 2.50).
    ///	2. GMarker(latlong, icon, inert) - Creates a marker at the passed latlng of either GPoint or GLatLng with icon or the G_DEFAULT_ICON. If the inert flag is true, then the marker is not clickable and will not fire any events. (Deprecated since 2.50).
    /// </summary>
    /// <returns type="Object"></returns>
    /// <param name="latlong" type="GLatLng" >The Lat/Long of the marker</param>
    /// <param name="opts" type="GMarkerOptions" optional="true">(optional) The options as javascript object literal. Options are:
    /// 1. icon: GIcon - Selects the tab with the given index, starting at 0, instead of the first tab (with index 0).
    ///	2. dragCrossMove: Boolean - Maximum width of the info window content, in pixels.
    /// 3. title: String - Indicates whether or not the info window should close for a click on the map that was not on a marker. If set to true, the info window will not close when the map is clicked. The default value is false. (Since 2.83).
    /// 4. clickable: Boolean - Function is called after the info window is opened and the content is displayed.
    /// 5. draggable: Boolean - Function is called when the info window is closed.
    /// 6. bouncy: Boolean - Pertinent for showMapBlowup() only. The zoom level of the blowup map in the info window.
    /// 7. bounceGravity: Number - Pertinent for showMapBlowup() only. The map type of the blowup map in the info window.
    /// 8. autoPan: Boolean - Specifies content to be shown when the infowindow is maximized. The content may be either an HTML String or an HTML DOM element. (Since 2.93).
    /// 9. zIndexProcess: function - Specifies title to be shown when the infowindow is maximized. The content may be either an HTML String or an HTML DOM element. (Since 2.93).
    /// </param>
}

GMarker.prototype =
{
    openInfoWindow: function(content, opts) {
        /// <summary>
        ///	Opens the map info window over the icon of the marker. The content of the info window is given as a DOM node. Only option GInfoWindowOptions.maxWidth is applicable.
        /// </summary>
        /// <param name="content" domElement="true">The contents of the window</param>
        /// <param name="opts" type="GInfoWindowOptions" optional="true">(optional) The options as javascript object literal. Options are:
        /// 1. maxWidth: Number - Maximum width of the info window content, in pixels.
        /// </param>
    },

    openInfoWindowHtml: function(content, opts) {
        /// <summary>
        ///	Opens the tabbed map info window over the icon of the marker. The content of the info window is given as an array of tabs that contain the tab content as DOM nodes. Only options GInfoWindowOptions.maxWidth and InfoWindowOptions.selectedTab are applicable.
        /// </summary>
        /// <param name="content" type="String">The contents of the window as html text</param>
        /// <param name="opts" type="GInfoWindowOptions" optional="true">(optional) The options as javascript object literal. Options are:
        /// 1. maxWidth: Number - Maximum width of the info window content, in pixels.
        /// 2. selectedTab: Number - Selects the tab with the given index, starting at 0, instead of the first tab (with index 0).
        /// </param>
    },

    openInfoWindowTabs: function(tabs, opts) {
        /// <summary>
        ///	Opens the tabbed map info window over the icon of the marker. The content of the info window is given as an array of tabs that contain the tab content as DOM nodes. Only options GInfoWindowOptions.maxWidth and InfoWindowOptions.selectedTab are applicable.
        /// </summary>
        /// <param name="tabs" type="GInfoWindowTab[]">The tabs</param>
        /// <param name="opts" type="GInfoWindowOptions" optional="true">(optional) The options as javascript object literal. Options are:
        /// 1. maxWidth: Number - Maximum width of the info window content, in pixels.
        /// 2. selectedTab: Number - Selects the tab with the given index, starting at 0, instead of the first tab (with index 0).
        /// </param>
    },

    openInfoWindowTabsHtml: function(tabs, opts) {
        /// <summary>
        ///	Opens the tabbed map info window over the icon of the marker. The content of the info window is given as an array of tabs that contain the tab content as Strings that contain HTML text. Only options InfoWindowOptions.maxWidth and InfoWindowOptions.selectedTab are applicable.
        /// </summary>
        /// <param name="tabs" type="GInfoWindowTab[]">The tabs</param>
        /// <param name="opts" type="GInfoWindowOptions" optional="true">(optional) The options as javascript object literal. Options are:
        /// 1. maxWidth: Number - Maximum width of the info window content, in pixels.
        /// 2. selectedTab: Number - Selects the tab with the given index, starting at 0, instead of the first tab (with index 0).
        /// </param>
    },

    bindInfoWindow: function(content, opts) {
        /// <summary>
        ///	Binds the given DOM node to this marker. The content within this node will be automatically displayed in the info window when the marker is clicked. Pass content as null to unbind. (Since 2.85).
        /// </summary>
        /// <param name="content" domElement="true">The contents</param>
        /// <param name="opts" type="GInfoWindowOptions" optional="true">(optional) The options as javascript object literal. Options are:
        /// 1. selectedTab: Number - Selects the tab with the given index, starting at 0, instead of the first tab (with index 0).
        ///	2. maxWidth: Number - Maximum width of the info window content, in pixels.
        /// 3. noCloseOnClick: Boolean - Indicates whether or not the info window should close for a click on the map that was not on a marker. If set to true, the info window will not close when the map is clicked. The default value is false. (Since 2.83).
        /// 4. onOpenFn: function - Function is called after the info window is opened and the content is displayed.
        /// 5. onCloseFn: function - Function is called when the info window is closed.
        /// 6. zoomLevel: Number - Pertinent for showMapBlowup() only. The zoom level of the blowup map in the info window.
        /// 7. mapType: GMapType - Pertinent for showMapBlowup() only. The map type of the blowup map in the info window.
        /// 8. maxContent: String - Specifies content to be shown when the infowindow is maximized. The content may be either an HTML String or an HTML DOM element. (Since 2.93).
        /// 9. maxTitle: String - Specifies title to be shown when the infowindow is maximized. The content may be either an HTML String or an HTML DOM element. (Since 2.93).
        /// 10. pixelOffset: GSize - Specifies a number of pixels in the up (x) and right (y) direction to move the infowindow away from the given GLatLng. (Since 2.98).
        /// </param>
    },

    bindInfoWindowHtml: function(content, opts) {
        /// <summary>
        ///	Binds the given HTML to this marker. The HTML content will be automatically displayed in the info window when the marker is clicked. Pass content as null to unbind. (Since 2.85)
        /// </summary>
        /// <param name="content" type="String">The contents as HTML text.</param>
        /// <param name="opts" type="GInfoWindowOptions" optional="true">(optional) The options as javascript object literal. Options are:
        /// 1. selectedTab: Number - Selects the tab with the given index, starting at 0, instead of the first tab (with index 0).
        ///	2. maxWidth: Number - Maximum width of the info window content, in pixels.
        /// 3. noCloseOnClick: Boolean - Indicates whether or not the info window should close for a click on the map that was not on a marker. If set to true, the info window will not close when the map is clicked. The default value is false. (Since 2.83).
        /// 4. onOpenFn: function - Function is called after the info window is opened and the content is displayed.
        /// 5. onCloseFn: function - Function is called when the info window is closed.
        /// 6. zoomLevel: Number - Pertinent for showMapBlowup() only. The zoom level of the blowup map in the info window.
        /// 7. mapType: GMapType - Pertinent for showMapBlowup() only. The map type of the blowup map in the info window.
        /// 8. maxContent: String - Specifies content to be shown when the infowindow is maximized. The content may be either an HTML String or an HTML DOM element. (Since 2.93).
        /// 9. maxTitle: String - Specifies title to be shown when the infowindow is maximized. The content may be either an HTML String or an HTML DOM element. (Since 2.93).
        /// 10. pixelOffset: GSize - Specifies a number of pixels in the up (x) and right (y) direction to move the infowindow away from the given GLatLng. (Since 2.98).
        /// </param>
    },

    bindInfoWindowTabs: function(tabs, opts) {
        /// <summary>
        ///	Binds the given GInfoWindowTabs (provided as DOM nodes) to this marker. The content within these tabs' nodes will be automatically displayed in the info window when the marker is clicked. Pass tabs as null to unbind. (Since 2.85).
        /// </summary>
        /// <param name="tabs" type="GInfoWindowTab[]">The tabs</param>
        /// <param name="opts" type="GInfoWindowOptions" optional="true">(optional) The options as javascript object literal. Options are:
        /// 1. selectedTab: Number - Selects the tab with the given index, starting at 0, instead of the first tab (with index 0).
        ///	2. maxWidth: Number - Maximum width of the info window content, in pixels.
        /// 3. noCloseOnClick: Boolean - Indicates whether or not the info window should close for a click on the map that was not on a marker. If set to true, the info window will not close when the map is clicked. The default value is false. (Since 2.83).
        /// 4. onOpenFn: function - Function is called after the info window is opened and the content is displayed.
        /// 5. onCloseFn: function - Function is called when the info window is closed.
        /// 6. zoomLevel: Number - Pertinent for showMapBlowup() only. The zoom level of the blowup map in the info window.
        /// 7. mapType: GMapType - Pertinent for showMapBlowup() only. The map type of the blowup map in the info window.
        /// 8. maxContent: String - Specifies content to be shown when the infowindow is maximized. The content may be either an HTML String or an HTML DOM element. (Since 2.93).
        /// 9. maxTitle: String - Specifies title to be shown when the infowindow is maximized. The content may be either an HTML String or an HTML DOM element. (Since 2.93).
        /// 10. pixelOffset: GSize - Specifies a number of pixels in the up (x) and right (y) direction to move the infowindow away from the given GLatLng. (Since 2.98).
        /// </param>
    },

    bindInfoWindowTabsHtml: function(tabs, opts) {
        /// <summary>
        ///	Binds the given GInfoWindowTabs (provided as strings of HTML) to this marker. The HTML content within these tabs will be automatically displayed in the info window when the marker is clicked. Pass tabs as null  to unbind. (Since 2.85).
        /// </summary>
        /// <param name="tabs" type="GInfoWindowTab[]">The tabs</param>
        /// <param name="opts" type="GInfoWindowOptions" optional="true">(optional) The options as javascript object literal. Options are:
        /// 1. selectedTab: Number - Selects the tab with the given index, starting at 0, instead of the first tab (with index 0).
        ///	2. maxWidth: Number - Maximum width of the info window content, in pixels.
        /// 3. noCloseOnClick: Boolean - Indicates whether or not the info window should close for a click on the map that was not on a marker. If set to true, the info window will not close when the map is clicked. The default value is false. (Since 2.83).
        /// 4. onOpenFn: function - Function is called after the info window is opened and the content is displayed.
        /// 5. onCloseFn: function - Function is called when the info window is closed.
        /// 6. zoomLevel: Number - Pertinent for showMapBlowup() only. The zoom level of the blowup map in the info window.
        /// 7. mapType: GMapType - Pertinent for showMapBlowup() only. The map type of the blowup map in the info window.
        /// 8. maxContent: String - Specifies content to be shown when the infowindow is maximized. The content may be either an HTML String or an HTML DOM element. (Since 2.93).
        /// 9. maxTitle: String - Specifies title to be shown when the infowindow is maximized. The content may be either an HTML String or an HTML DOM element. (Since 2.93).
        /// 10. pixelOffset: GSize - Specifies a number of pixels in the up (x) and right (y) direction to move the infowindow away from the given GLatLng. (Since 2.98).
        /// </param>
    },

    closeInfoWindow: function() {
        /// <summary>
        ///	Closes the info window only if it belongs to this marker. (Since 2.85).
        /// </summary>
    },

    showMapBlowup: function(opts) {
        /// <summary>
        ///		Opens the map info window over the icon of the marker. The content of the info window is a closeup map around the marker position. Only options InfoWindowOptions.zoomLevel  and InfoWindowOptions.mapType are applicable.
        /// </summary>
        /// <param name="opts" type="GInfoWindowOptions" optional="true">(optional) The options as javascript object literal. Options are:
        /// 1. zoomLevel: Number - Pertinent for showMapBlowup() only. The zoom level of the blowup map in the info window.
        /// 2. mapType: GMapType - Pertinent for showMapBlowup() only. The map type of the blowup map in the info window.
        /// </param>
    },

    getIcon: function() {
        /// <summary>
        ///	Returns the icon of this marker, as set by the constructor.
        /// </summary>
        /// <returns type="GIcon"></returns>
    },

    getTitle: function() {
        /// <summary>
        ///	Returns the title of this marker, as set by the constructor via the GMarkerOptions.title property. Returns undefined if no title is passed in. (Since 2.85)
        /// </summary>
        /// <returns type="String"></returns>
    },

    getPoint: function() {
        /// <summary>
        ///	Returns the geographical coordinates at which this marker is anchored, as set by the constructor or by setPoint(). (Deprecated since 2.88).
        /// </summary>
        /// <returns type="GLatLng"></returns>
    },

    getLatLng: function() {
        /// <summary>
        ///	Returns the geographical coordinates at which this marker is anchored, as set by the constructor or by setLatLng(). (Since 2.88).
        /// </summary>
        /// <returns type="GLatLng"></returns>
    },

    setPoint: function(latlng) {
        /// <summary>
        ///	Sets the geographical coordinates of the point at which this marker is anchored. (Deprecated since 2.88).
        /// </summary>
        /// <param name="latlng" type="GLatLng">The Lat/Long to set.</param>
    },

    setLatLng: function(latlng) {
        /// <summary>
        ///	Sets the geographical coordinates of the point at which this marker is anchored. (Since 2.88).
        /// </summary>
        /// <param name="latlng" type="GLatLng">The Lat/Long to set.</param>
    },

    enableDragging: function() {
        /// <summary>
        ///	Enables the marker to be dragged and dropped around the map. To function, the marker must have been initialized with GMarkerOptions.draggable = true.
        /// </summary>
    },

    disableDragging: function() {
        /// <summary>
        ///	Disables the marker from being dragged and dropped around the map.
        /// </summary>
    },

    draggable: function() {
        /// <summary>
        ///	Returns true if the marker has been initialized via the constructor using GMarkerOptions.draggable = true. Otherwise, returns false.
        /// </summary>
        /// <returns type="Boolean"></returns>
    },

    draggingEnabled: function() {
        /// <summary>
        ///	Returns true if the marker is currently enabled for the user to drag on the map.
        /// </summary>
        /// <returns type="Boolean"></returns>
    },

    setImage: function(url) {
        /// <summary>
        ///	Requests the image specified by the url to be set as the foreground image for this marker. Note that neither the print image nor the shadow image are adjusted. Therefore this method is primarily intended to implement highlighting or dimming effects, rather than drastic changes in marker's appearances. (Since 2.75).
        /// </summary>
        /// <param name="url" type="String">The url of the image.</param>
    },

    hide: function() {
        /// <summary>
        ///	Hides the marker if it is currently visible. Note that this function triggers the event GMarker.visibilitychanged in case the marker is currently visible. (Since 2.77).
        /// </summary>
    },

    show: function() {
        /// <summary>
        ///	Shows the marker if it is currently hidden. Note that this function triggers the event GMarker.visibilitychanged in case the marker is currently hidden. (Since 2.77).
        /// </summary>
    },

    isHidden: function() {
        /// <summary>
        ///	Returns true if the marker is currently hidden. Otherwise returns false. (Since 2.77)
        /// </summary>
    }
}
﻿GMarkerManager = function(map, opts) {
    /// <summary>Creates a new marker manager that controlls visibility of markers for the specified map. (Since 2.67)</summary>
    /// <param name="map"></param>
    /// <param name="opts"></param>
    /// <field name="changed">EVENT: This event is fired when markers managed by a manager have been added to or removed from the map. The event handler function should be prepared to accept two arguments. The first one is the rectangle defining the bounds of the visible grid. The second one carries the number of markers currently shown on the map.</field>
    /// <returns type="Object"></returns>
}

GMarkerManager.prototype =
{
    // ====================================================================================
    // Methods
    // ====================================================================================
    addMarkers: function(markers, minZoom, maxZoom) {
        /// <summary>Adds a batch of markers to this marker manager. The markers are not added to the map, until the refresh() method is called. Once placed on a map, the markers are shown if they fall within the map's current viewport and the map's zoom level is greater than or equal to the specified minZoom. If the maxZoom was given, the markers are automatically removed if the map's zoom is greater than the one specified. (Since 2.67)</summary>
        /// <param name="markers"></param>
        /// <param name="minZoom"></param>
        /// <param name="maxZoom"></param>
    },

    addMarker: function(marker, minZoom, maxZoom) {
        /// <summary>Adds a single marker to a collection of markers controlled by this manager. If the marker's location falls within the map's current viewport and the map's zoom level is within the specified zoom level rage, the marker is immediately added to the map. Similar to the addMarkers method, the minZoom and the optional maxZoom parameters specify the range of zoom levels at which the marker is shown. (Since 2.67)</summary>
        /// <param name="markers"></param>
        /// <param name="minZoom"></param>
        /// <param name="maxZoom"></param>
    },

    refresh: function() {
        /// <summary>Forces the manager to update markers shown on the map. This method must be called if markers were added using the addMarkers method. (Since 2.67)</summary>
    },

    getMarkerCount: function(zoom) {
        /// <summary>Returns the total number of markers potentially visible at the given zoom level. This may include markers at lower zoom levels. (Since 2.67)</summary>
        /// <param name="zoom"></param>
        /// <returns type="Number"></returns>
    }
}
﻿GMarkerManagerOptions = function() {
/// <field name="borderPadding" type="Number">Specifies, in pixels, the extra padding outside the map's current viewport monitored by a manager. Markers that fall within this padding are added to the map, even if they are not fully visible. (Since 2.67)</field>
/// <field name="maxZoom" type="Number">Sets the maximum zoom level monitored by a marker manager. If not given, the manager assumes the maximum map zoom level. This value is also used when markers are added to the manager without the optional maxZoom parameter. (Since 2.67)</field>
/// <field name="trackMarkers" type="Boolean">Indicates whether or not a marker manager should track markers' movements. If you wish to move managed markers using the setPoint method, this option should be set to true. The default value is false. (Since 2.67)</field>
}

GMarkerManagerOptions.prototype =
{
    // ====================================================================================
    // Properties
    // ====================================================================================
    borderPadding: null,
    maxZoom: null,
    trackMarkers: null
}
﻿GMarkerOptions = function() {
/// <field name="icon" type="GIcon">Chooses the Icon for this class. If not specified, G_DEFAULT_ICON is used. (Since 2.50)</field>
/// <field name="dragCrossMove" type="Boolean">When dragging markers normally, the marker floats up and away from the cursor. Setting this value to true keeps the marker underneath the cursor, and moves the cross downwards instead. The default value for this option is false. (Since 2.63)</field>
/// <field name="title" type="String">This string will appear as tooltip on the marker, i.e. it will work just as the title attribute on HTML elements. (Since 2.50)</field>
/// <field name="clickable" type="Boolean">Toggles whether or not the marker is clickable. Markers that are not clickable or draggable are inert, consume less resources and do not respond to any events. The default value for this option is true, i.e. if the option is not specified, the marker will be clickable. (Since 2.50)</field>
/// <field name="draggable" type="Boolean">Toggles whether or not the marker will be draggable by users. Markers set up to be dragged require more resources to set up than markers that are clickable. Any marker that is draggable is also clickable, bouncy and auto-pan enabled by default. The default value for this option is false. (Since 2.61)</field>
/// <field name="bouncy" type="Number">Toggles whether or not the marker should bounce up and down after it finishes dragging. The default value for this option is false. (Since 2.61)</field>
/// <field name="bounceGravity" type="Number">When finishing dragging, this number is used to define the acceleration rate of the marker during the bounce down to earth. The default value for this option is 1. (Since 2.61)</field>
/// <field name="autoPan" type="Boolean">Auto-pan the map as you drag the marker near the edge. If the marker is draggable the default value for this option is true. (Since 2.87)</field>
/// <field name="zIndexProcess" type="Function">This function is used for changing the z-Index order of the markers when they are overlaid on the map and is also called when their infowindow is opened. The default order is that the more southerly markers are placed higher than more northerly markers. This function is passed in the GMarker object and returns a number indicating the new z-index. (Since 2.98)</field>
}

GMarkerOptions.prototype =
{
    // ====================================================================================
    // Properties
    // ====================================================================================
    icon: null,
    dragCrossMove: null,
    title: null,
    clickable: null,
    draggable: null,
    bouncy: null,
    bounceGravity: null,
    autoPan: null,
    zIndexProcess: null
}
﻿GMenuMapTypeControl = function(useShortNames) {
    /// <summary>Creates a drop-down map type control for switching between supported map types.</summary>
    /// <param name="useShortNames" type="Boolean" optional="true">(Optional) If true use the short (alt) names for the map types else long names by default.</param>
    /// <returns type="GControl"></returns>
}

GMenuMapTypeControl.prototype = new GControl();
﻿GMercatorProjection = function(zoomlevels) {
    /// <summary>Creates a mercator projection for the given number of zoom levels.</summary>
    /// <param name="zoomlevels"></param>
    /// <returns type="Object"></returns>
}

GMercatorProjection.prototype =
{
    // ====================================================================================
    // Methods
    // ====================================================================================
    fromLatLngToPixel: function(latlng, zoom) {
        /// <summary>Returns the map coordinates in pixels for the point at the given geographical coordinates, and the given zoom level.</summary>
        /// <param name="latlng"></param>
        /// <param name="zoom"></param>
        /// <returns type="Object"></returns>
    },

    fromPixelToLatLng: function(pixel, zoom, unbounded) {
        /// <summary>Returns the geographical coordinates for the point at the given map coordinates in pixels, and the given zoom level. Flag unbounded causes the geographical longitude coordinate not to wrap when beyond the -180 or 180 degrees meridian.</summary>
        /// <param name="latlng"></param>
        /// <param name="zoom"></param>
        /// <param name="unbounded"></param>
        /// <returns type="Object"></returns>
    },

    tileCheckRange: function(tile, zoom, tilesize) {
        /// <summary>Returns to the map if the tile index is in a valid range for the map type. Otherwise the map will display an empty tile. It also may modify the tile index to point to another instance of the same tile in the case that the map contains more than one copy of the earth, and hence the same tile at different tile coordinates.</summary>
        /// <param name="tile"></param>
        /// <param name="zoom"></param>
        /// <param name="tilesize"></param>
        /// <returns type="Object"></returns>
    },

    getWrapWidth: function(zoom) {
        /// <summary>Returns to the map the periodicity in x-direction, i.e. the number of pixels after which the map repeats itself because it wrapped once round the earth. By default, returns Infinity, i.e. the map will not repeat itself. This is used by the map to compute the placement of overlays on map views that contain more than one copy of the earth (this usually happens only at low zoom levels). (Since 2.46). Mercator projection is periodic in longitude direction, therefore this returns the width of the map of the entire Earth in pixels at the given zoom level. (Since 2.46)</summary>
        /// <param name="latlng"></param>
        /// <param name="zoom"></param>
        /// <param name="unbounded"></param>
        /// <returns type="Object"></returns>
    }
}
﻿GOverlay = function() {
    /// <summary>This interface is implemented by the GMarker, GPolyline, GTileLayerOverlay  and GInfoWindow classes in the maps API library. You can implement it if you want to display custom types of overlay objects on the map. An instance of GOverlay can be put on the map with the method GMap2.addOverlay(). The map will then call the method GOverlay.initialize() on the overlay instance to display itself on the map initially. Whenever the map display changes, the map will call GOverlay.redraw() so that the overlay can reposition itself if necessary. The overlay instance can use the method GMap2.getPane() to get hold of one or more DOM container elements to attach itself to.</summary>
    /// <returns type="Object"></returns>
}

GOverlay.prototype =
{
    getZIndex: function(latitude) {
        /// <summary>Returns a CSS z-index value for a given latitude. It computes a z index such that overlays further south are on top of overlays further north, thus creating the 3D appearance of marker overlays.</summary>
        /// <returns type="Number" integer="true"></returns>
    }
}
﻿GOverviewMapControl = function() {
    /// <summary>Creates a collapsible overview mini-map in the corner of the main map for reference location and navigation (through dragging). The GOverviewMapControl creates an overview map with a one-pixel black border.</summary>
    /// <returns type="	Object"></returns>
}

GOverviewMapControl.prototype = new GControl();
﻿GPoint = function(x, y) {
    /// <summary>Creates a GPoint object.</summary>	
    /// <param name="x" type="Number" integer="true"> x coordinate. (This value increases to the right in the Google Maps coordinate system.)</param>
    /// <param name="y" type="Number" integer="true">y coordinate. (This value increases downwards in the Google Maps coordinate system.)</param>
    /// <field name="x" type="Number" integer="true"> x coordinate. (This value increases to the right in the Google Maps coordinate system.)</field>
    /// <field name="y" type="Number" integer="true">y coordinate. (This value increases downwards in the Google Maps coordinate system.)</field>
    /// <returns type="Object"></returns>
}

GPoint.prototype =
{
    x: null,
    y: null,

    equals: function(other) {
        /// <summary>Returns true if the other point has equal coordinates.</summary>
        /// <param name="other" type="GPoint">The point to compare.</param>
        /// <returns type="Boolean"></returns>
    },

    toString: function() {
        /// <summary>Returns a string that contains the x and y coordinates, in this order, separated by a comma.</summary>
        /// <returns type="String"></returns>
    }
}
﻿GPolyEditingOptions = function() {
/// <field name="maxVertices" type="Number">This property specifies the maximum number of vertices permitted for this polyline. Once this number is reached, no more may be added. (Since 2.111)</field>
/// <field name="fromStart" type="Boolean">This property specifies whether enableDrawing should add points from the start rather than from the end, which is the default. (Since 2.111)</field>
}

GPolyEditingOptions.prototype =
{
    // ====================================================================================
    // Properties
    // ====================================================================================
    maxVertices: null,
    fromStart: null
}
﻿GPolygon = function(latlngs, strokeColor, strokeWeight, strokeOpacity, fillColor, fillOpacity, opts) {
    /// <summary>Creates a polygon from an array of vertices. The colors are given as a string that contains the color in hexadecimal numeric HTML style, i.e. #RRGGBB. The weight is the width of the line in pixels. The opacities is given as a number between 0 and 1. The line will be antialiased and semitransparent. (Since 2.69)</summary>
    /// <returns type="Object"></returns>
    /// <param name="latlngs" type="Array" >The Lat/Long points to be used to create the polygon</param>
    /// <param name="strokeColor" type="string" >Colors are given as a string that contains the color in hexadecimal numeric HTML style, i.e. #RRGGBB.</param>
    /// <param name="strokeWeight" type="Number" >The weight is the width of the line in pixels. </param>
    /// <param name="strokeOpacity" type="Number" >The opacities is given as a number between 0 and 1.</param>
    /// <param name="fillColor" type="string" >Colors are given as a string that contains the color in hexadecimal numeric HTML style, i.e. #RRGGBB.</param>
    /// <param name="fillOpacity" type="Number" >The opacities is given as a number between 0 and 1.</param>
    /// <param name="opts" type="GMarkerOptions" optional="true">(optional) The options as javascript object literal. Options are:
    /// 1. icon: GIcon - Selects the tab with the given index, starting at 0, instead of the first tab (with index 0).
    ///	2. dragCrossMove: Boolean - Maximum width of the info window content, in pixels.
    /// 3. title: String - Indicates whether or not the info window should close for a click on the map that was not on a marker. If set to true, the info window will not close when the map is clicked. The default value is false. (Since 2.83).
    /// 4. clickable: Boolean - Function is called after the info window is opened and the content is displayed.
    /// 5. draggable: Boolean - Function is called when the info window is closed.
    /// 6. bouncy: Boolean - Pertinent for showMapBlowup() only. The zoom level of the blowup map in the info window.
    /// 7. bounceGravity: Number - Pertinent for showMapBlowup() only. The map type of the blowup map in the info window.
    /// 8. autoPan: Boolean - Specifies content to be shown when the infowindow is maximized. The content may be either an HTML String or an HTML DOM element. (Since 2.93).
    /// 9. zIndexProcess: function - Specifies title to be shown when the infowindow is maximized. The content may be either an HTML String or an HTML DOM element. (Since 2.93).
    /// </param>
    /// <field name="remove">This event is fired when the polygon is removed from the map, using GMap2.removeOverlay() or GMap2.clearOverlays().</field>
    /// <field name="visibilitychanged">This event is fired when the visibility state of the polygon toggles from visible to hidden or vice versa. The isVisible argument reflects the state of the polygon after completion of this visibility state. (Since 2.87). Available Args: isVisible</field>
    /// <field name="click">This event is fired when the polygon is clicked, passing in the clicked coordinate of the polygon within its latlng argument. Note that this event also subsequently triggers a "click" event on the map, where the polygon is passed as the overlay argument within that event. (Since 2.88>). Available Args: latlng</field>
    /// <field name="mouseover">This event is fired when the mouse moves into the region of the polygon. (Since 2.111)</field>
    /// <field name="mouseout">This event is fired when the mouse moves out of the region of the polygon. (Since 2.111)</field>
    /// <field name="lineupdated">This event is fired when either the style or shape of the polygon is updated. (Since 2.111)</field>
    /// <field name="endline">This event is fired when polygon drawing (initiated by call to GPolyline.enableDrawing) is completed by the user. (Since 2.111)</field>
    /// <field name="cancelline">This event is fired when polygon drawing (initiated by call to GPolyline.enableDrawing) is aborted by the user. (Since 2.111)</field>
}

GPolygon.prototype =
{
    fromEncoded: function(polylines, fill, color, opacity, outline) {
        /// <summary>FACTORY METHOD: Creates a polygon (consisting of a number of polylines) from encoded strings of aggregated coordinates and levels.</summary>
        /// <param name="polylines">Contains an associative array of constituent polylines, encoded in the same format as described in the GPolyline.fromEncoded documentation. In case multiple values are specified in polylines, the first polyline's values are taken.</param>
        /// <param name="fill">Specifies whether to fill in the polygon</param>
        /// <param name="color">Specifies the fill color</param>
        /// <param name="opacity">Specifies whether to stroke the polygon with the polyline's opacity.</param>
        /// <param name="outline">Specifies whether to stroke the polygon with the polyline's color, weight.</param>
        /// <returns type="GPolygon"></returns>
    },

    deleteVertex: function(index) {
        /// <summary>Removes with the given index in the polygon and updates the shape of the polygon accordingly. The GPolygon must already be added to the map via GMap2.addOverlay(). (Since 2.111)</summary>
        /// <param name="index">Index of the vertex to delete</param>
    },

    disableEditing: function() {
        /// <summary>Reverses the effects of enableEditing, removing all control points from the line and rendering it uneditable by the user. (Since 2.111)</summary>
    },

    enableDrawing: function(opts) {
        /// <summary>Allows a user to construct a GPolygon object by clicking on additional points on the map. The GPolyline must already be added to the map via the GMap2.addOverlay(), even if the polyline is initially unpopulated and contains no vertices. Each click adds an additional vertex to the polygon boundary, and drawing may be terminated through either a double-click, or clicking on the first point to complete the shape, at which point an "endline" event will be triggered if the polygon was successfully completed; otherwise, a "cancelline" event will be triggered, but the polyline will not be removed from the map. (Since 2.111)</summary>
        /// <param name="opts"></param>
    },

    enableEditing: function(opts) {
        /// <summary>Allows modification of an existing GPolygon boundary. When enabled, users may select and drag existing vertices. Unless a vertex limit less than current number of vertices is specified by maxVertices within GPolyEditingOptions, "ghost" points will also be added at the midpoints of polygon sections, allowing users to interpolate new vertices by clicking and dragging these additional vertices. A "lineupdated" event will be triggered whenever vertex is added or moved. (Since 2.111)</summary>
        /// <param name="opts"></param>
    },

    getVertexCount: function() {
        /// <summary>Returns the number of vertices in the polygon. (Since 2.69)</summary>
        /// <returns type="Number"></returns>
    },

    getVertex: function(index) {
        /// <summary>Returns the vertex with the given index in the polygon. (Since 2.69)</summary>
        /// <param name="index">Index of the vertex to get</param>
        /// <returns type="GLatLng"></returns>
    },

    getLength: function() {
        /// <summary>Returns the length (in meters) of the polyline along the surface of a spherical Earth. (Since 2.85)</summary>
        /// <returns type="Number"></returns>
    },

    getBounds: function() {
        /// <summary>Returns the bounds for this polygon. (Since 2.85)</summary>
        /// <returns type="GLatLngBounds"></returns>
    },

    hide: function() {
        /// <summary>Hides the polygon if it is both currently visible and GPolygon.supportsHide returns true. Note that this function triggers the event GPolygon.visibilitychanged in case the polygon is currently visible. (Since 2.87)</summary>
    },

    show: function() {
        /// <summary>Shows the polygon if it is currently hidden. Note that this function triggers the event GPolygon.visibilitychanged in case the polygon is currently hidden. (Since 2.87)</summary>
    },

    insertVertex: function(index, latlng) {
        /// <summary>Inserts a new point at the given index in the polygon. The GPolygon must already be added to the map via GMap2.addOverlay(). (Since 2.111)</summary>
        /// <param name="index" type="Number">Index of the vertex.</param>
        /// <param name="latlng" type="GLatLng">Corresponding point.</param>
    },

    isHidden: function() {
        /// <summary>Returns true if the polygon is currently hidden. Otherwise returns false. (Since 2.87)</summary>
        /// <returns type="Boolean"></returns>
    },

    supportsHide: function() {
        /// <summary>Returns true if GPolygon.hide() is supported in the current environment for GPolygon objects. Otherwise returns false. (Since 2.87)</summary>
        /// <returns type="Boolean"></returns>
    },

    setFillStyle: function(style) {
        /// <summary>Changes the fill style of the polyline. The GPolyline must already be added to the map via GMap2.addOverlay(). (Since 2.111)</summary>
        /// <param name="style">Fill style of the polyline</param>
    },

    setStrokeStyle: function(style) {
        /// <summary>Changes the line style of the polygon. The GPolygon must already be added to the map via GMap2.addOverlay(). (Since 2.111)</summary>
        /// <param name="style">Line style of the polygon</param>
    }
}
﻿GPolygonOptions = function() {
    /// <field name="clickable" type="Boolean">Toggles whether or not the polygon is clickable. The default value for this option is true, i.e. if the option is not specified, the polygon will be clickable. (Since 2.91)</field>
}

GPolygonOptions.prototype =
{
    // ====================================================================================
    // Properties
    // ====================================================================================
    clickable: null
}
﻿GPolyline = function(latlngs, color, weight, opacity, opts) {
    /// <summary>Creates a polyline from an array of vertices. The colors are given as a string that contains the color in hexadecimal numeric HTML style, i.e. #RRGGBB. The weight is the width of the line in pixels. The opacities is given as a number between 0 and 1. The line will be antialiased and semitransparent. (Since 2.69)</summary>
    /// <returns type="Object"></returns>
    /// <param name="latlngs" type="Array" >The Lat/Long points to be used to create the polyline</param>
    /// <param name="color" type="string" >Colors are given as a string that contains the color in hexadecimal numeric HTML style, i.e. #RRGGBB.</param>
    /// <param name="weight" type="Number" >The weight is the width of the line in pixels. </param>
    /// <param name="opacity" type="Number" >The opacities is given as a number between 0 and 1.</param
    /// <param name="opts" type="GMarkerOptions" optional="true">(optional) The options as javascript object literal. Options are:
    /// 1. icon: GIcon - Selects the tab with the given index, starting at 0, instead of the first tab (with index 0).
    ///	2. dragCrossMove: Boolean - Maximum width of the info window content, in pixels.
    /// 3. title: String - Indicates whether or not the info window should close for a click on the map that was not on a marker. If set to true, the info window will not close when the map is clicked. The default value is false. (Since 2.83).
    /// 4. clickable: Boolean - Function is called after the info window is opened and the content is displayed.
    /// 5. draggable: Boolean - Function is called when the info window is closed.
    /// 6. bouncy: Boolean - Pertinent for showMapBlowup() only. The zoom level of the blowup map in the info window.
    /// 7. bounceGravity: Number - Pertinent for showMapBlowup() only. The map type of the blowup map in the info window.
    /// 8. autoPan: Boolean - Specifies content to be shown when the infowindow is maximized. The content may be either an HTML String or an HTML DOM element. (Since 2.93).
    /// 9. zIndexProcess: function - Specifies title to be shown when the infowindow is maximized. The content may be either an HTML String or an HTML DOM element. (Since 2.93).
    /// </param>
    /// <field name="remove">This event is fired when the polyline is removed from the map, using GMap2.removeOverlay() or GMap2.clearOverlays().</field>
    /// <field name="visibilitychanged">This event is fired when the visibility state of the polyline toggles from visible to hidden or vice versa. The isVisible argument reflects the state of the polyline after completion of this visibility state. (Since 2.87). Available Args: isVisible</field>
    /// <field name="click">This event is fired when the polyline is clicked, passing in the clicked coordinate of the polyline within its latlng argument. Note that this event also subsequently triggers a "click" event on the map, where the polyline is passed as the overlay argument within that event. (Since 2.88>). Available Args: latlng</field>
    /// <field name="mouseover">This event is fired when the mouse moves into the region of the polyline. (Since 2.111)</field>
    /// <field name="mouseout">This event is fired when the mouse moves out of the region of the polyline. (Since 2.111)</field>
    /// <field name="lineupdated">This event is fired when either the style or shape of the polyline is updated. (Since 2.111)</field>
    /// <field name="endline">This event is fired when polyline drawing (initiated by call to GPolyline.enableDrawing) is completed by the user. (Since 2.111)</field>
    /// <field name="cancelline">This event is fired when polyline drawing (initiated by call to GPolyline.enableDrawing) is aborted by the user. (Since 2.111)</field>
}

GPolyline.prototype =
{
    fromEncoded: function(color, weight, opacity, latlngs, zoomFactor, levels, numLevels) {
        /// <summary>FACTORY METHOD: Creates a polyline (consisting of a number of polylines) from encoded strings of aggregated coordinates and levels.</summary>
        /// <param name="color">Specifies the fill color</param>
        /// <param name="weight"></param>
        /// <param name="opacity">Specifies whether to stroke the polyline with the polyline's opacity.</param>
        /// <param name="latlngs">Contains an associative array of constituent polylines, encoded in the same format as described in the GPolyline.fromEncoded documentation. In case multiple values are specified in polylines, the first polyline's values are taken.</param>
        /// <param name="zoomFactor"></param>
        /// <param name="levels"></param>
        /// <param name="numLevels"></param>
        /// <param name="outline">Specifies whether to stroke the polyline with the polyline's color, weight.</param>
        /// <returns type="GPolygon"></returns>
    },

    deleteVertex: function(index) {
        /// <summary>Removes with the given index in the polyline and updates the shape of the polyline accordingly. The GPolyline must already be added to the map via GMap2.addOverlay(). (Since 2.111)</summary>
        /// <param name="index">Index of the vertex to delete</param>
    },

    disableEditing: function() {
        /// <summary>Reverses the effects of enableEditing, removing all control points from the line and rendering it uneditable by the user. (Since 2.111)</summary>
    },

    enableDrawing: function(opts) {
        /// <summary>Allows a user to construct a GPolyline object by clicking on additional points on the map. The GPolyline must already be added to the map via the GMap2.addOverlay(), even if the polyline is initially unpopulated and contains no vertices. Each click adds an additional vertex to the polyline boundary, and drawing may be terminated through either a double-click, or clicking on the first point to complete the shape, at which point an "endline" event will be triggered if the polyline was successfully completed; otherwise, a "cancelline" event will be triggered, but the polyline will not be removed from the map. (Since 2.111)</summary>
        /// <param name="opts"></param>
    },

    enableEditing: function(opts) {
        /// <summary>Allows modification of an existing GPolyline boundary. When enabled, users may select and drag existing vertices. Unless a vertex limit less than current number of vertices is specified by maxVertices within GPolyEditingOptions, "ghost" points will also be added at the midpoints of polyline sections, allowing users to interpolate new vertices by clicking and dragging these additional vertices. A "lineupdated" event will be triggered whenever vertex is added or moved. (Since 2.111)</summary>
        /// <param name="opts"></param>
    },

    getVertexCount: function() {
        /// <summary>Returns the number of vertices in the polyline. (Since 2.69)</summary>
        /// <returns type="Number"></returns>
    },

    getVertex: function(index) {
        /// <summary>Returns the vertex with the given index in the polyline. (Since 2.69)</summary>
        /// <param name="index">Index of the vertex to get</param>
        /// <returns type="GLatLng"></returns>
    },

    getArea: function() {
        /// <summary>Returns the area (in square meters) of the polyline, assuming a spherical Earth. (Since 2.85)</summary>
        /// <returns type="Number"></returns>
    },

    getBounds: function() {
        /// <summary>Returns the bounds for this polyline. (Since 2.85)</summary>
        /// <returns type="GLatLngBounds"></returns>
    },

    hide: function() {
        /// <summary>Hides the polyline if it is both currently visible and GPolyline.supportsHide returns true. Note that this function triggers the event GPolyline.visibilitychanged in case the polyline is currently visible. (Since 2.87)</summary>
    },

    show: function() {
        /// <summary>Shows the polyline if it is currently hidden. Note that this function triggers the event GPolyline.visibilitychanged in case the polyline is currently hidden. (Since 2.87)</summary>
    },

    insertVertex: function(index, latlng) {
        /// <summary>Inserts a new point at the given index in the polyline. The GPolyline must already be added to the map via GMap2.addOverlay(). (Since 2.111)</summary>
        /// <param name="index" type="Number">Index of the vertex.</param>
        /// <param name="latlng" type="GLatLng">Corresponding point.</param>
    },

    isHidden: function() {
        /// <summary>Returns true if the polyline is currently hidden. Otherwise returns false. (Since 2.87)</summary>
        /// <returns type="Boolean"></returns>
    },

    supportsHide: function() {
        /// <summary>Returns true if GPolyline.hide() is supported in the current environment for GPolyline objects. Otherwise returns false. (Since 2.87)</summary>
        /// <returns type="Boolean"></returns>
    },

    setStrokeStyle: function(style) {
        /// <summary>Changes the line style of the polyline. The GPolyline must already be added to the map via GMap2.addOverlay(). (Since 2.111)</summary>
        /// <param name="style">Line style of the polyline</param>
    }
}
﻿GPolylineOptions = function() {
    /// <field name="clickable" type="Boolean">Toggles whether or not the polyline is clickable. The default value for this option is true, i.e. if the option is not specified, the polyline will be clickable. (Since 2.91)</field>
    /// <field name="geodesic" type="Boolean">Render each edge of the polyline as a geodesic (a segment of a "great circle"). A geodesic is the shortest path between two points along the surface of the Earth. (Since 2.84)</field>
}

GPolylineOptions.prototype =
{
    // ====================================================================================
    // Properties
    // ====================================================================================
    clickable: null,
    geodesic: null
}
﻿GPolyStyleOptions = function() {
    /// <field name="color" type="string">This property specifies a string that contains a hexadecimal numeric HTML style, i.e. #RRGGBB. (Since 2.111)</field>
    /// <field name="weight" type="Number">This property specifies the width of the line in pixels. (Since 2.111)</field>
    /// <field name="opacity" type="Number">This property specifies the opacity of the polyline as a fractional value between 0 (transparent) and 1 (opaque). (Since 2.111)</field>
}

GPolyStyleOptions.prototype =
{
    // ====================================================================================
    // Properties
    // ====================================================================================
    color: null,
    weight: null,
    opacity: null
}
﻿GPov = function() {
    /// <returns type="Object"></returns>
    /// <field name="yaw" type="Number">The camera yaw in degrees relative to true north. True north is 0 degrees, east is 90 degrees, south is 180 degrees, west is 270 degrees. (Since 2.104)</field>
    /// <field name="pitch" type="Number">The camera pitch in degrees, relative to the street view vehicle. Ranges from 90 degrees (directly upwards) to -90 degrees (directly downwards). (Since 2.104)</field>
    /// <field name="zoom" type="Number">The zoom level. Fully zoomed-out is level 0, zooming in increases the zoom level. (Since 2.104)</field>
}

GPov.prototype =
{
    // ====================================================================================
    // Properties
    // ====================================================================================
    yaw: null,
    pitch: null,
    zoom: null
}
﻿GProjection = function(INTERFACE) {
    /// <summary>INTERFACE USED in GMercatorProjection</summary>
    /// <returns type="Object"></returns>
}

GProjection.prototype =
{
    // ====================================================================================
    // Methods
    // ====================================================================================
    fromLatLngToPixel: function(latlng, zoom) {
        /// <summary>Returns the map coordinates in pixels for the point at the given geographical coordinates, and the given zoom level.</summary>
        /// <param name="latlng"></param>
        /// <param name="zoom"></param>
        /// <returns type="Object"></returns>
    },

    fromPixelToLatLng: function(pixel, zoom, unbounded) {
        /// <summary>Returns the geographical coordinates for the point at the given map coordinates in pixels, and the given zoom level. Flag unbounded causes the geographical longitude coordinate not to wrap when beyond the -180 or 180 degrees meridian.</summary>
        /// <param name="latlng"></param>
        /// <param name="zoom"></param>
        /// <param name="unbounded"></param>
        /// <returns type="Object"></returns>
    },

    tileCheckRange: function(tile, zoom, tilesize) {
        /// <summary>Returns to the map if the tile index is in a valid range for the map type. Otherwise the map will display an empty tile. It also may modify the tile index to point to another instance of the same tile in the case that the map contains more than one copy of the earth, and hence the same tile at different tile coordinates.</summary>
        /// <param name="tile"></param>
        /// <param name="zoom"></param>
        /// <param name="tilesize"></param>
        /// <returns type="Object"></returns>
    },

    getWrapWidth: function(zoom) {
        /// <summary>Returns to the map the periodicity in x-direction, i.e. the number of pixels after which the map repeats itself because it wrapped once round the earth. By default, returns Infinity, i.e. the map will not repeat itself. This is used by the map to compute the placement of overlays on map views that contain more than one copy of the earth (this usually happens only at low zoom levels). (Since 2.46). Mercator projection is periodic in longitude direction, therefore this returns the width of the map of the entire Earth in pixels at the given zoom level. (Since 2.46)</summary>
        /// <param name="latlng"></param>
        /// <param name="zoom"></param>
        /// <param name="unbounded"></param>
        /// <returns type="Object"></returns>
    }
}
﻿GRoute = function() {
    /// <summary>
    ///	GRoute has no constructor.
    /// </summary> 
}

GRoute.prototype =
{
    // ====================================================================================
    // Methods
    // ====================================================================================
    getNumSteps: function() {
        /// <summary>Returns the number of steps in this route. (Since 2.81)</summary>
        /// <returns type="Number"></returns>
    },

    getStep: function(index) {
        /// <summary>Return the GStep object for the index step in this route. (Since 2.81)</summary>
        /// <param name="index" type="Number">Index of the step in this route that we want to retrieve</param>
        /// <returns type="GStep"></returns>
    },

    getStartGeocode: function() {
        /// <summary>Return the geocode result for the starting point of this route. The structure of this object is identical to that of a single placemark in a response from the GClientGeocoder object. (Since 2.83)</summary>
        /// <returns type="Object"></returns>
    },

    getEndGeocode: function() {
        /// <summary>Return the geocode result for the ending point of this route. The structure of this object is identical to that of a single placemark in a response from the GClientGeocoder object. (Since 2.83)</summary>
        /// <returns type="Object"></returns>
    },

    getEndLatLng: function() {
        /// <summary>Returns a GLatLng object for the last point along the polyline for this route. Note that this point may be different from the lat,lng in GRoute.getEndGeocode() because getEndLatLng() always returns a point that is snapped to the road network. There is no corresponding getStartLatLng() method because that is identical to calling GRoute.getStep(0).getLatLng(). (Since 2.81)</summary>
        /// <returns type="GLatLng"></returns>
    },

    getSummaryHtml: function() {
        /// <summary>Returns an HTML snippet containing a summary of the distance and time for this route. (Since 2.81)</summary>
        /// <returns type="String"></returns>
    },

    getDistance: function() {
        /// <summary>Returns an object literal representing the total distance of this route. See GDirections.getDistance() for the structure of this object. (Since 2.81)</summary>
        /// <returns type="Object"></returns>
    },

    getDuration: function() {
        /// <summary>Returns an object literal representing the total time of this route. See GDirections.getDuration() for the structure of this object. (Since 2.81)</summary>
        /// <returns type="Object"></returns>
    }
}
﻿GScaleControl = function() {
    /// <summary>Creates a control that displays the map scale.</summary>
    /// <returns type="GControl"></returns>
}

GScaleControl.prototype = new GControl();

﻿GScreenOverlay = function(imageUrl, screenXY, overlayXY, size) {
    /// <summary>Creates a screen overlay from an image URL, and displays it on the screen as specified by the screenXY, overlayXY, and size parameters.</summary>
    /// <param name="imageUrl" type="Number" integer="true"></param>
    /// <param name="screenXY" type="Number" integer="true">The screenXY parameter determines the point relative to the screen origin (lower left corner) that the overlay image is mapped to.</param>
    /// <param name="overlayXY" type="Number" integer="true">The overlayXY parameter determines the point on (or outside of) the overlay image that is mapped to the screenXY coordinate. This can be used to effectively 'crop' the image.</param>
    /// <param name="size" type="Number" integer="true"></param>
    /// <field name="visibilitychanged">EVENT: This event is fired when the visibility state of the screen overlay toggles from visible to hidden or vice versa. The isVisible argument reflects the state of the screen overlay after completion of this visibility state. (Since 2.92). Available Args: isVisible</field>
    /// <returns type="Object"></returns>
}

GScreenOverlay.prototype =
{
    hide: function() {
        /// <summary>Hides the screen overlay if it is currently visible. Note that this function triggers the event GScreenOverlay.visibilitychanged in case the screen overlay is currently visible. (Since 2.92)</summary>
    },

    isHidden: function() {
        /// <summary>Returns true if the screen overlay is currently hidden. Otherwise returns false. (Since 2.92)</summary>
        /// <returns type="Boolean"></returns>
    },

    show: function() {
        /// <summary>Shows the screen overlay if it is currently hidden. Note that this function triggers the event GScreenOverlay.visibilitychanged in case the screen overlay is currently hidden. (Since 2.92)</summary>
    },

    supportHide: function() {
        /// <summary>Always returns true. (Since 2.92)</summary>
        /// <returns type="Boolean"></returns>
    }
}
﻿GScreenPoint = function(width, height, xunits, yunits) {
    /// <summary>Creates a GScreenPoint object. The x and y coordinates can either represent fractional or absolute positoning by passing in "fraction" or "pixels" to the xunits and yunits parameters. The default value for those parameters is "pixels." (Since 2.92)</summary>
    /// <param name="width" type="Number"></param>
    /// <param name="height" type="Number"></param>
    /// <param name="xunits" type="string" optional="true">Fractional or pixel size by passing in "fraction" or "pixel" to the xunits and yunits parameters. The default value for the width and height arguments is "pixel." (Since 2.92)</param>
    /// <param name="yunits" type="string" optional="true">Fractional or pixel size by passing in "fraction" or "pixel" to the xunits and yunits parameters. The default value for the width and height arguments is "pixel." (Since 2.92)</param>
    /// <field name="width" type="Number">x coordinate, increases to the left.</field>
    /// <field name="height" type="Number">y coordinate, increases downwards.</field>
    /// <field name="xunits" type="Number">Specifies the type of units to use for x coordinate. Set this to "fraction" to indicate fractional position relative to map size, or "pixels" for absolute positioning. Defaults to absolute positioning.</field>
    /// <field name="yunits" type="Number">Specifies the type of units to use for y coordinate. Set this to "fraction" to indicate fractional positionrelative to map size, or "pixels" for absolute positioning. Defaults to absolute positioning.</field> 
    /// <returns type="Object"></returns>
}

GScreenPoint.prototype =
{
    // ====================================================================================
    // Properties
    // ====================================================================================
    width: null,
    height: null,
    xunits: null,
    yunits: null
}
﻿GScreenSize = function(width, height, xunits, yunits) {
    /// <summary>Creates a GScreenSize object that indicates the size of a rectangular area of the map.</summary>
    /// <param name="width" type="Number"></param>
    /// <param name="height" type="Number"></param>
    /// <param name="xunits" type="string" optional="true">Fractional or pixel size by passing in "fraction" or "pixel" to the xunits and yunits parameters. The default value for the width and height arguments is "pixel." (Since 2.92)</param>
    /// <param name="yunits" type="string" optional="true">Fractional or pixel size by passing in "fraction" or "pixel" to the xunits and yunits parameters. The default value for the width and height arguments is "pixel." (Since 2.92)</param>
    /// <field name="width" type="Number">The width parameter of the screen real estate. Note that this value represents either a fractional or absolute pixel value depending on the value of the GScreen.yunits property.</field>
    /// <field name="height" type="Number">The height parameter of the screen real estate. Note that this value represents either a fractional or absolute pixel value depending on the value of the GScreen.yunits property.</field>
    /// <field name="xunits" type="Number">Specifies the type of units to use for the GScreenSize.width property. Set this to "fraction" to indicate fractional position relative to map size, or "pixel" for pixel positioning. Defaults to pixel positioning.</field>
    /// <field name="yunits" type="Number">Specifies the type of units to use for the GScreenSize.height property. Set this to "fraction" to indicate fractional position relative to map size, or "pixel" for pixel positioning. Defaults to pixel positioning.</field> 
    /// <returns type="Object"></returns>
}

GScreenSize.prototype =
{
    // ====================================================================================
    // Properties
    // ====================================================================================
    width: null,
    height: null,
    xunits: null,
    yunits: null
}
﻿GSize = function(width, height) {
    /// <summary>Creates a GSize object.</summary>
    /// <param name="width" type="Number">The width parameter.</param>
    /// <param name="height" type="Number">The height parameter.</param>
    /// <field name="width" type="Number">The width property.</field>
    /// <field name="height" type="Number">The height property.</field>       
}

GSize.prototype =
{
    width: null,
    height: null,

    equals: function(other) {
        /// <summary>Returns true iff the other size has exactly equal components.</summary>
        /// <param name="other" type="Object">Element to be compared.</param> 
        /// <returns type="Boolean"></returns>
    },

    toString: function() {
        /// <summary>Returns a string that contains the wdith and height parameter, in this order, separated by a comma.</summary>
        /// <returns type="String"></returns>
    }
}


﻿GSmallMapControl = function() {
    /// <summary>Creates a control with buttons to pan in four directions, and zoom in and zoom out.</summary>
    /// <returns type="GControl"></returns>
}

GSmallMapControl.prototype = new GControl();
﻿GSmallZoomControl = function() {
    /// <summary>Creates a control with buttons to zoom in and zoom out.</summary>
    /// <returns type="GControl"></returns>
}

GSmallZoomControl.prototype = new GControl();
﻿GStep = function() {
    /// <summary>
    ///	GStep has no constructor.
    /// </summary>	
}

GStep.prototype =
{
    // ====================================================================================
    // Methods
    // ====================================================================================
    getLatLng: function() {
        /// <summary>Returns a GLatLng object for the first point along the polyline for this step. (Since 2.81)</summary>
        /// <returns type="GLatLng"></returns>
    },

    getPolylineIndex: function() {
        /// <summary>Returns the index of the first point along the polyline for this step. (Since 2.81)</summary>
        /// <returns type="Number"></returns>
    },

    getDescriptionHtml: function() {
        /// <summary>Return an HTML string containing the description of this step. (Since 2.81)</summary>
        /// <returns type="String"></returns>
    },

    getDistance: function() {
        /// <summary>Returns an object literal representing the total distance of this step. See GDirections.getDistance() for the structure of this object. (Since 2.81)</summary>
        /// <returns type="Object"></returns>
    },

    getDuration: function() {
        /// <summary>Returns an object literal representing the total time of this step. See GDirections.getDuration() for the structure of this object. (Since 2.81)</summary>
        /// <returns type="Object"></returns>
    }
}
﻿GStreetviewClient = function() {
    /// <summary>Creates a new GStreetviewClient. (Since 2.104)</summary>
    /// <returns type="Object"></returns>
}

GStreetviewClient.prototype =
{
    // ====================================================================================
    // Methods
    // ====================================================================================
    getNearestPanoramaLatLng: function(latlng, callback) {
        /// <summary>Finds the GLatLng of the nearest panorama to a given point and passes it to the provided callback. If there are no nearby panoramas, or if a server error occurs, the provided callback is passed null instead. (Since 2.104)</summary>
        /// <param name="latlng" type="GLatLng">Position to search for panorama.</param>
        /// <param name="callback" type="GLatLng">GLatLng of the nearest panorama. If there are no nearby panoramas, or if a server error occurs, the provided callback is passed null instead.</param>
    },

    getNearestPanorama: function(latlng, callback) {
        /// <summary>Retrieves the data for the nearest panorama to a given latlng and passes it to the provided callback as a GStreetviewData object. (Since 2.104)</summary>
        /// <param name="latlng" type="GLatLng">Position to search for panorama.</param>
        /// <param name="callback" type="GStreetviewData">GLatLng of the nearest panorama. If there are no nearby panoramas, or if a server error occurs, the provided callback is passed null instead.</param>
    },

    getPanoramaById: function(panoId, callback) {
        /// <summary>Retrieves the data for the given panorama id and passes it to the provided callback as a GStreetviewData object. Ids are unique per panorama and stable for the lifetime of a session, but are liable to change between sessions. (Since 2.104)</summary>
        /// <param name="panoId" type="Number">Panorama ID.</param>
        /// <param name="callback" type="GStreetviewData">Data for the given panorama id.</param>
    }

}
﻿GStreetviewData = function() {
    /// <returns type="Object"></returns>
    /// <field name="location" type="GStreetviewLocation">The location data. (Since 2.104)</field>
    /// <field name="copyright" type="string">A localized copyright attribution. (Since 2.104)</field>
    /// <field name="links" type="Array">Links (Array of GStreetviewLink) to neighbouring panoramas, if any. (Since 2.104)</field>
    /// <field name="code" type="GStreetviewClient.ReturnValues">Status code. See GStreetviewClient.ReturnValues. (Since 2.104)</field>
}

GStreetviewData.prototype =
{
    // ====================================================================================
    // Properties
    // ====================================================================================
    location: null,
    copyright: null,
    links: null,
    code: null
}
﻿GStreetviewLink = function() {
    /// <returns type="Object"></returns>
    /// <field name="yaw" type="Number">The yaw from the current location to the neighbouring location. (Since 2.104)</field>
    /// <field name="description" type="string">A localized string describing the neighbouring location. (Since 2.104)</field>
    /// <field name="panoId" type="string">A unique identifier for the neighbouring panorama. This is stable within a session but unstable across sessions. (Since 2.104)</field>
}

GStreetviewLink.prototype =
{
    // ====================================================================================
    // Properties
    // ====================================================================================
    yaw: null,
    description: null,
    panoId: null
}
﻿GStreetviewLocation = function() {
    /// <returns type="Object"></returns>
    /// <field name="latlng" type="GLatLng">The latlng of the panorama. (Since 2.104)</field>
    /// <field name="pov" type="GPov">The initial point of view. (Since 2.104)</field>
    /// <field name="description" type="string">A localized string describing the location. (Since 2.104)</field>
    /// <field name="panoId" type="string">A unique identifier for the panorama. This is stable within a session but unstable across sessions. (Since 2.104)</field>
}

GStreetviewLocation.prototype =
{
    // ====================================================================================
    // Properties
    // ====================================================================================
    latlng: null,
    pov: null,
    description: null,
    panoId: null
}
﻿GStreetviewOverlay = function() {
    /// <summary>Creates a new GStreetviewOverlay which implements the GOverlay interface. (Since 2.104)</summary>
    /// <field name="changed">EVENT: This event is fired when the state of Street View data changes within the current viewport. It is fired when moving the map from an area with Street View data to one without, and vice-versa. It is also fired when the addition of a GStreetviewOverlay to the map results in Street View data appearing within the viewport. The hasStreetviewData parameter will be true if the viewport contains Street View data and false otherwise. (Since 2.120). Available Args: hasStreetviewData</field>
}

GStreetviewOverlay.prototype =
{

}

﻿GStreetviewPanorama = function(container, opts) {
    /// <summary>Creates a new GStreetviewPanorama object with a corresponding flash viewer in the provided container. The viewer will not be shown until a location has been specified, either in the optional GStreetviewPanoramaOptions opts object or by calling setLocationAndPOV. (Since 2.104)</summary>
    /// <param name="container" type="GSize">Container in which the panorama will be added.</param>
    /// <param name="opts" type="GStreetviewPanoramaOptions">Specification of the location.</param>
}

GStreetviewPanorama.prototype =
{
    // ====================================================================================
    // Methods
    // ====================================================================================
    remove: function() {
        /// <summary>Removes the instance of the flash viewer currently associated with this object from the DOM. This function must be called before removing the HTML container element otherwise some browsers will fail to garbage collect the flash viewer. (Since 2.104)</summary>
    },

    setContainer: function(container) {
        /// <summary>Sets the container element for the flash viewer, moving the viewer from its old location if it is currently open. (Since 2.104)</summary>
        /// <param name="container" type="String">Container element for the flash viewer.</param>
    },

    checkResize: function() {
        /// <summary>Notifies the flash viewer of a change of the size of its container. Call this method after the size of the container DOM object has changed, so that the viewer can adjust itself to fit the new size. (Since 2.104)</summary>
    },

    hide: function() {
        /// <summary>Hides the flash viewer. To remove the viewer, call .remove() instead. (Since 2.104)</summary>
    },

    show: function() {
        /// <summary>Shows the flash viewer. (Since 2.104)</summary>
    },

    isHidden: function() {
        /// <summary>Returns true if the flash viewer associated with this object is hidden, otherwise false. (Since 2.104)</summary>
        /// <returns type="Boolean"></returns>
    },

    getPOV: function() {
        /// <summary>Returns the current point of view (POV) displayed in the flash viewer. (Since 2.104)</summary>
        /// <returns type="GPov"></returns>
    },

    setPOV: function(pov) {
        /// <summary>Changes the current point of view (POV) displayed in the flash viewer without changing the location. (Since 2.104)</summary>
        /// <param name="pov" type="GPov">Point of view (POV).</param>
    },

    panTo: function(pov, opt_longRoute) {
        /// <summary>Changes the current point of view (POV) displayed in the flash viewer without changing the location. Performs a smooth animation from the current POV to the new POV. (Since 2.104)</summary>
        /// <param name="pov" type="GPov">New Point of view (POV)</param>
        /// <param name="opt_longRoute" type="Boolean">If opt_longRoute is set then the animation will follow a long route around the sphere, otherwise the shortest route</param>
    },

    setLocationAndPOV: function(latlng, opt_pov) {
        /// <summary>Sets the location and POV of the flash viewer. After calling this function, the viewer will display the nearest location to the latlng provided if one is available. If no data is available for this location, then the flash player will remain unchanged and emit an error code. See GStreetviewClient.ReturnValues for the possible response codes. (Since 2.104)</summary>
        /// <param name="latlng" type="GLatLng">GLatLng object where the view need to be set.</param>
        /// <param name="opt_pov" type="Boolean">If opt_longRoute is set then the animation will follow a long route around the sphere, otherwise the shortest route</param>
    },

    followLink: function(yaw) {
        /// <summary>Follows a link from the current panorama to a neighbouring panorama. If there are multiple neighbouring panoramas then the nearest match will be taken. (Since 2.104)</summary>
        /// <param name="yaw" type="Number">Yaw specifies the direction of the neighbouring panorama.</param>
    }
}

﻿GStreetviewPanoramaOptions = function() 
{
    /// <field name="latlng" type="GLatLng">The latlng at which to open the flash viewer. (Since 2.104)</field>
    /// <field name="pov" type="GPov">The camera orientation with which to open the flash viewer. (Since 2.104)</field>
}

GStreetviewPanoramaOptions.prototype =
{   
    // ====================================================================================
    // Properties
    // ====================================================================================
    latlng : null,
    pov : null
}
﻿GTileLayer = function(copyrights, minResolution, maxResolution, options) {
    /// <summary>Constructor arguments can be omitted if instantiated as a prototype. A Subclass constructor must invoke this constructor using call(). The optional options parameter specifies a set of GTileLayerOptions which should be passed as an object literal.</summary>
    /// <param name="copyrights"></param>
    /// <param name="minResolution"></param>
    /// <param name="maxResolution"></param>
    /// <param name="options" optional="true"></param>
    /// <field name="newcopyright">EVENT: This event is fired when a new copyright is added to the copyright collection of this tile layer. Available Args: copyright</field>
    /// <returns type="Object"></returns>
}

GTileLayer.prototype =
{
    minResolution: function() {
        /// <summary>Returns to the map type the lowest zoom level of this tile layer.</summary>
        /// <returns type="Number"></returns>
    },

    maxResolution: function() {
        /// <summary>Returns to the map type the highest zoom level of this tile layer.</summary>
        /// <returns type="Number"></returns>
    },

    getTileUrl: function(tile, zoom) {
        /// <summary>Abstract. Returns to the map the URL of the map tile with the tile indices given by the x and y properties of the GPoint, at the given zoom level.</summary>
        /// <param name="minResolution"></param>
        /// <param name="maxResolution"></param>
        /// <returns type="String"></returns>
    },

    isPng: function() {
        /// <summary>Abstract. Returns to the map whether the tiles are in PNG image format and hence can be transparent. Otherwise GIF is assumed.</summary>
        /// <returns type="Boolean"></returns>
    },

    getOpacity: function() {
        /// <summary>Abstract. Returns to the map the opacity with which to display this tile layer. 1.0 is opaque, 0.0 is transparent.</summary>
        /// <returns type="Number"></returns>
    },

    getCopyright: function(bounds, zoom) {
        /// <summary>Abstract. Returns to the map the copyright messages for this tile layer that are pertinent for the given map region at the given zoom level. This is used to generate the copyright message of the GMapType to which this tile layer belongs. (Since 2.89)</summary>
        /// <param name="bounds" type="string">A string containing any valid directions query, e.g. "from: Seattle to: San Francisco" or "from: Toronto to: Ottawa to: New York".</param>
        /// <param name="zoom" type="GDirectionsOptions">Direction options for the itinerary informations.</param>
        /// <returns type="string"></returns>
    }
}
﻿GTileLayerOptions = function() {
    /// <field name="opacity" type="Number">Sets the tile opacity from 0.0 (invisible) to 1.0 (opaque). The default is 1.0.</field>
    /// <field name="isPng" type="Boolean">Indicates whether or not tiles are in the PNG format.</field>
    /// <field name="tileUrlTemplate" type="String">Specifies a template for the tile URLs that will be expanded for each tile request to refer to a unique tile based on an existing tile coordinate system. Placing a template in the GTileLayer constructor allows you to dynamically retrieve tiles using this coordinate system, similar to the way Google Maps retrieves tiles. Templates should be of the form:http://host/tile?x={X}&y={Y}&z={Z}.png where X and Y refer to latitudinal and longitudinal tile coordinates, and Z refers to the zoom level. E.g. http://host/tile?x=3&y=27&z=5.png.</field>
    /// <field name="draggingCursor" type="String">The cursor to display while dragging the map. (Since 2.59)</field>
}

GTileLayerOptions.prototype =
{
    // ====================================================================================
    // Properties
    // ====================================================================================
    opacity: null,
    isPng: null,
    tileUrlTemplate: null,
    draggingCursor: null
}
﻿GTrafficOverlay = function() {
    /// <summary>Creates a new GTrafficOverlay object that shows road traffic information. (Since 2.81)</summary>
}

GTrafficOverlay.prototype =
{
    // ====================================================================================
    // Methods
    // ====================================================================================
    hide: function() {
        /// <summary>Hides the traffic overlay. (Since 2.81)</summary>
    },

    show: function() {
        /// <summary>Shows the traffic overlay. (Since 2.81)</summary>
    }
}
﻿GTravelModes = function() {
/// <field name="G_TRAVEL_MODE_WALKING">Walking (Since 2.129)</field>
/// <field name="G_TRAVEL_MODE_DRIVING">Driving (Since 2.129)</field>
}

GTravelModes.prototype =
{
    // ====================================================================================
    // Properties
    // ====================================================================================
    G_TRAVEL_MODE_WALKING: null,
    G_TRAVEL_MODE_DRIVING: null
}
﻿GUnload: function() {
    /// <summary>Dismantles all registered event handlers in order to prevent memory leaks. Should be called as a handler for the unload event.</summary>
}
﻿GXml = function() {
}

GXml.prototype =
{
    // ====================================================================================
    // Methods
    // ====================================================================================
    parse: function(xmltext) {
        /// <summary>Parses the given string as XML text and returns a DOM representation. If the browser doesn't support XML parsing natively, this returns the DOM node of an empty DIV element.</summary>
        /// <param name="xmltext" type="String">XML text to parse</param>
        /// <returns type="Node"></returns>
    },

    value: function(xmlnode) {
        /// <summary>Returns the text value (i.e., only the plain text content) of the XML document fragment given in DOM representation.</summary>
        /// <param name="xmlnode" type="string">XML document fragment given in DOM representation</param>
        /// <returns type="String"></returns>
    }
}
﻿GXmlHttp = function() {
}

GXmlHttp.prototype =
{
    // ====================================================================================
    // STATIC Methods
    // ====================================================================================
    create: function() {
        /// <summary>STATIC: Factory to create a new instance of XmlHttpRequest.</summary>
        /// <returns type="GXmlHttp"></returns>
    }
}
﻿GXslt = function()
{     
}

GXslt.prototype =
{   
    // ====================================================================================
    // Methods
    // ====================================================================================
    create : function(xsltnode)
    {
        /// <summary>Creates a GXslt instance from the XSLT stylesheet given as DOM representation.</summary>
        /// <param name="xsltnode" type="String">XSLT stylesheet given as DOM representation.</param>
        /// <returns type="GXslt"></returns>
    },
    
    transformToHtml : function(xmlnode, htmlnode)
    {
        /// <summary>Uses the XSLT stylesheet given in the constructor of this GXslt instance to transform the XML document given as DOM representation in xmlnode. Appends the resulting HTML document fragment to the given htmlnode. This only works if the browser natively supports XSL transformations, in which case it will return true. Otherwise, this function will do nothing and return false.</summary>
        /// <param name="xmlnode" type="string">XML document given as DOM representation.</param>
        /// <param name="xmlnode" type="string">HTML document fragment where result appends.</param>
        /// <returns type="Boolean"></returns>
    }
}
