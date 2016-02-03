(function () {
  'use strict';

  mapboxgl.accessToken = 'pk.eyJ1IjoibWF0ZW9naWFub2xpbyIsImEiOiJjaWs2MzRrcmMwMDRndnJrc2tibTZmeW8xIn0.-HNhp-sfXXy3DnCdgsNtpQ';
  var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mateogianolio/cik6uwflk00fkbum79u4mo1t5', //stylesheet location
    center: [30.50, 40], // starting position
    zoom: 2 // starting zoom
  });

  map.addControl(new mapboxgl.Navigation());
  map.on('style.load', function () {
    map.addSource('quakes', {
      type: 'geojson',
      data: 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson'
    });

    var options = {
      type: 'circle',
      source: 'quakes'
    };

    var alerts = ['green', 'yellow', 'orange', 'red'],
        colors = ['#edf8fb', '#b3cde3', '#8c96c6', '#88419d'],
        alert,
        mag;

    // magnitude styling
    for (mag = 0; mag < 10; mag += 2.5) {
      options.id = 'quakes-' + mag;
      options.filter = [
        'all',
        ['>=', 'mag', mag],
        ['<', 'mag', mag + 2.5]
      ];
      console.log(Math.floor(mag / alerts.length));
      options.paint = {
        'circle-radius': Math.exp(mag / 3),
        'circle-color': colors[Math.floor(mag / colors.length)],
        'circle-opacity': 0.75
      };
      map.addLayer(options);
    }

    // quake alert styling
    for (alert = 0; alert < alerts.length; alert++) {
      options.id = 'quakes-alert-' + alert;
      options.filter = [
        'all',
        ['==', 'alert', alerts[alert]]
      ];
      options.paint = {
        'circle-radius': (alert + 5) * 2,
        'circle-color': alerts[alert],
        'circle-blur': 1
      };
      map.addLayer(options);
    }
  });
}());
