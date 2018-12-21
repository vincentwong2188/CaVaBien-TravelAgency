var map;

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: 51.517182,
			lng: -0.129476
		},
		zoom: 8
	});
}

function initMap() {

	var mercure = {
		info: '<strong>Mercure London Kensington Hotel</strong><br>\
					1A Lexham Gardens<br> Kensington, London W8 5JJ, UK<br>\
					<a href="https://goo.gl/maps/yjjv3dP2cMM2">Get Directions</a>',
		lat: 51.4950,
		long: 0.1906
	};

	var hyde = {
		info: '<strong>Smart Hyde Park Inn Hotel</strong><br>\
					48-50 Inverness Terrace<br> Westminster Borough, London, W2 3JA, UK<br>\
					<a href="https://goo.gl/maps/ta78M4FsisJ2">Get Directions</a>',
		lat: 51.5123,
		long: 0.1860
	};

	var suite = {
		info: '<strong>La Suite West-Hyde Park</strong><br>\
					41-51 Inverness Terrace<br> Westminster Borough, London, W2 3JN, UK<br>\
					<a href="https://goo.gl/maps/KuhLX2fT7i52">Get Directions</a>',
		lat: 51.5125,
		long: -0.1868
	};

    var portobello = {
      info: '<strong>The Portobello Hotel</strong><br>\
            22 Stanley Gardens<br> Kensington and Chelsea, London, W11 2NG, UK<br>\
            <a href="https://goo.gl/maps/BzuYYX29Thw">Get Directions</a>',
      lat: 51.5125,
      long: -0.203396
    };

    var ace = {
      info: '<strong>Ace Hotel London Shoreditch</strong><br>\
            100 Shoreditch High St<br> London E1 6JQ, UK<br>\
            <a href="https://goo.gl/maps/hY77SdJeJfp">Get Directions</a>',
      lat: 51.277,
      long: -0.077226
    };

    var waldorf = {
      info: '<strong>The Waldorf Hilton, London</strong><br>\
            Aldwych<br> London WC2B 4DD, UK<br>\
            <a href="https://goo.gl/maps/5utY7FGohpQ2">Get Directions</a>',
      lat: 51.513027,
      long: -0.118882
    };

    var martins = {
      info: '<strong>St Martins Lane London Hotel</strong><br>\
            45 St Martins Lane<br> London WC2N 4HX, UK<br>\
            <a href="https://goo.gl/maps/Y4W97fd68xs">Get Directions</a>',
      lat: 51.51123,
      long: -0.124837
    };

    var henrietta = {
      info: '<strong>Henrietta Hotel</strong><br>\
            14-15 Henrietta St<br> London WC2E 8QG, UK<br>\
            <a href="https://goo.gl/maps/ikxmB9G9KNn">Get Directions</a>',
      lat: 51.511330,
      long: -0.123829
    };

    var elizabeth = {
      info: '<strong>London Elizabeth Hotel</strong><br>\
            4 Lancaster Terrace<br> London W2 3PF, UK<br>\
            <a href="https://goo.gl/maps/UDNzT3nYNED2">Get Directions</a>',
      lat: 51.512329,
      long: -0.176231
    };

    var grand = {
      info: '<strong>Park Grand London Paddington Hotel</strong><br>\
            1-2 Queens Gardens<br> London W2 3BA, UK<br>\
            <a href="https://goo.gl/maps/XDbE9D2mbHk">Get Directions</a>',
      lat: 51.514654,
      long: -0.180827
    };

    var edwardian = {
      info: '<strong>Radisson Blu Edwardian Vanderbilt Hotel</strong><br>\
            68-86 Cromwell Rd<br> Kensington, London SW7 5BT, UK<br>\
            <a href="https://goo.gl/maps/yEgEzr8Qcu22">Get Directions</a>',
      lat: 51.495690,
      long: -0.181864
    };


    var locations = [
        [mercure.info, mercure.lat, mercure.long, 0],
        [hyde.info, hyde.lat, hyde.long, 1],
        [suite.info, suite.lat, suite.long, 2],
        [portobello.info, portobello.lat, portobello.long, 3],
        [ace.info, ace.lat, ace.long, 4],
        [waldorf.info, waldorf.lat, waldorf.long, 5],
        [martins.info, martins.lat, martins.long, 6],
        [henrietta.info, henrietta.lat, henrietta.long, 7],
        [elizabeth.info, elizabeth.lat, elizabeth.long, 8],
        [grand.info, grand.lat, grand.long, 9],
        [edwardian.info, edwardian.lat, edwardian.long, 10]
      ];

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 13,
		center: new google.maps.LatLng(51.517182, -0.129476),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});

  var infowindow = new google.maps.InfoWindow({});

	var marker, i;

	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			map: map
		});

		google.maps.event.addListener(marker, 'click', (function (marker, i) {
			return function () {
				infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
			}
		})(marker, i));
	}
}
