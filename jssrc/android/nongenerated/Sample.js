//Type your code here
var watchId = "";
var getWatchPosition = function() {
    try {
        var positionOptions = {
            maximumAge: 5000,
            minimumDistance: 5,
            minimumTime: 5000,
            enableHighAccuracy: true
        };
        watchId = kony.location.watchPosition(successcallback, errorcallback, positionOptions);
    } catch (e) {
        alert("Exception " + JSON.stringify(e));
    }

    function successcallback(position) {
        if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_WIFI)) {} else {}
        Home.lblLat.text = position.coords.latitude;
        Home.lblLong.text = position.coords.longitude;
        Home.lblWatchId.text = watchId;
        Home.networkType.text = kony.net.isNetworkAvailable(constants.NETWORK_TYPE_WIFI) ? "Connected to WiFi" : "Connected to Mobile Network";
    }

    function errorcallback(positionerror) {
        var errorMesg = "Error code: " + positionerror.code;
        errorMesg = errorMesg + " message: " + positionerror.message;
        alert(errorMesg);
    }
};