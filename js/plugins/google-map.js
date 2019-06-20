/* Initialize Google Maps */

function googleMap() {

    $('.map').each(function(i, e) {

        $map = $(e);
        $map_lat = $map.attr('data-mapLat');
        $map_lon = $map.attr('data-mapLon');
        $map_zoom = parseInt($map.attr('data-mapZoom'));
        $map_title = $map.attr('data-mapTitle');
        $map_info = $map.attr('data-info');
        $map_img = $map.attr('data-img');
        $map_color = $map.attr('data-color');
        $map_height = $map.attr('data-height');

        var latlng = new google.maps.LatLng($map_lat, $map_lon);
        var options = {
            scrollwheel: false,
            draggable: false,
            zoomControl: false,
            disableDoubleClickZoom: true,
            disableDefaultUI: true,
            zoom: $map_zoom,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        /* Map's style */
        var colors = {
            red1: "#fd685b",
            red2: "#fe8e84",
            orange1: "#fa6f57",
            orange2: "#fb9381",
            yellow1: "#fecd5e",
            yellow2: "#fedc8f",
            green1: "#4eae49",
            green2: "#73c16f",
            mint1: "#4fcead",
            mint2: "#7bdac2",
            aqua1: "#4FC1E9",
            aqua2: "#73d2f4",
            blue1: "#5D9CEC",
            blue2: "#86b5f1",
            purple1: "#ab94e9",
            purple2: "#c0afef",
            pink1: "#ea89bf",
            pink2: "#efa7cf",
            white1: "#E6E9ED",
            white2: "#F5F7FA",
            grey1: "#AAB2BD",
            grey2: "#CCD1D9",
            black1: "#434A54",
            black2: "#5f656d"
        };

        if ($map_color == 'invert') {

            var styles = [{
                    "stylers": [{
                        "invert_lightness": "true"
                    }, {
                        "hue": "0xffbb00"
                    }, {
                        "saturation": "-100"
                    }, {
                        "lightness": "15"
                    }]
                }],
                textcolor = '#333';

        } else {

            var styles = [{
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "water",
                    "stylers": [{
                        "color": colors[$map_color + "1"]
                    }]
                }, {
                    "featureType": "water",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "landscape.natural",
                    "stylers": [{
                        "color": colors[$map_color + "2"]
                    }]
                }, {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "poi",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "road",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "transit",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "landscape.man_made",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "administrative",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }],
                textcolor = colors[$map_color + "1"];

        }

        var styledMap = new google.maps.StyledMapType(styles, {
            name: "Styled Map"
        });

        var map = new google.maps.Map($map[0], options);

        var icon = {
            url: $map_img,
            size: null,
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(26, 26),
            scaledSize: new google.maps.Size(52, 52)
        };

        var marker = new google.maps.Marker({
            position: latlng, // loc is a variable with my lngLat object
            title: $map_title,
            map: map,
            icon: icon
        });

        map.mapTypes.set('map_style', styledMap);
        map.setMapTypeId('map_style');

        var contentString = '<div class="infobox-inner" style="color: ' + textcolor + ';">' + $map_info + '</div>';

        /* + '<br> <a href="#directions" class="btn btn-outline btn-xs vertical-space-sm"> Get Directions </a>' + */

        /* Custom infowindow code; it has been replaced by the code below, using Infobox plugin

        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });
            
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map,marker);
        });
        infowindow.open(map,marker); // To force Infowindow open

        */

        var infobox = new InfoBox({
            content: contentString,
            disableAutoPan: false,
            maxWidth: 0,
            zIndex: null,
            boxStyle: {
                width: "280px"
            },
            closeBoxURL: "",
            pixelOffset: new google.maps.Size(-140, 40),
            infoBoxClearance: new google.maps.Size(1, 1)
        });

        // user defined size
        $map.css({
            'height': $map_height + 'px'
        });

        google.maps.event.addListener(marker, 'click', function() {
            infobox.open(map, marker);
        });
        infobox.open(map, marker); // To force Infowindow open

        // center map on resize
        google.maps.event.addDomListener(window, "resize", function() {
            var center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(center);
        });

    });

}

if ($('.map').length) {

    googleMap();

}
