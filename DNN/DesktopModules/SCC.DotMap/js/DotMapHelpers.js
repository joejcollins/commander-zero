/// <reference path="LatLngToOSGB.js" />
// Grid Reference and Web Helpers

// Returns a string for the grid reference like SO 67649 83405
function GetGridReference(point) {
    var wg84 = new WGS84ToOGB(point.y, point.x, 0);
    var ogb = new LLtoNE(wg84.lat, wg84.lon);
    return NE2NGR(ogb.east, ogb.north);
}

// Returns a string for the tetrad like SO68R
function GetDinty(point) {
    var wg84 = new WGS84ToOGB(point.y, point.x, 0);
    var ogb = new LLtoNE(wg84.lat, wg84.lon);
    var myriad = NE2NGR(ogb.east, ogb.north).substring(0, 2);
    var suffixes = [["A", "B", "C", "D", "E"],
                    ["F", "G", "H", "I", "J"],
                    ["K", "L", "M", "N", "P"],
                    ["Q", "R", "S", "T", "U"],
                    ["V", "W", "X", "Y", "Z"]];
    var strX = ogb.east.toString();
    var tetradX = strX.substring(1, 2);
    var suffixIndexX = parseInt(strX.substring(2, 3) / 2);
    var strY = ogb.north.toString();
    var tetradY = strY.substring(1, 2);
    var suffixIndexY = parseInt(strY.substring(2, 3) / 2);
    var dinty = suffixes[suffixIndexX][suffixIndexY];
    return myriad + tetradX + tetradY + dinty;
}

// Get a parameter from the query string
function GetUrlParameter(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)"; 
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);
    if (results == null) return ""; 
    else 
    return results[1];
}

// Get the application path
function GetAppPath() {
    var host = document.location.host;
    if (host == "localhost") host += "/Dnn"; //Crap hack for local testing
    return "http://" + host;
}

// Get path to the module
function GetModulePath() {
    return GetAppPath() + "/DesktopModules/SCC.DotMap/";
}

// Show or hide a list of species
function toggleNode(node) {
    var nodeArray = node.childNodes;
    for (i = 0; i < nodeArray.length; i++) {
        node = nodeArray[i];
        if (node.tagName && node.tagName.toLowerCase() == 'div')
            node.style.display = (node.style.display == 'block') ? 'none' : 'block';
    }
}

// If it is the enter key, return false
function filterEnterKeyPress(e) {
    var event = e || window.event;
    if (event.keyCode == 13) {
        return false;
    }
}