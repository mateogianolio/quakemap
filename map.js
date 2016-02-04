(function () {
  'use strict';

  mapboxgl.accessToken = 'pk.eyJ1IjoibWF0ZW9naWFub2xpbyIsImEiOiJjaWs2MzRrcmMwMDRndnJrc2tibTZmeW8xIn0.-HNhp-sfXXy3DnCdgsNtpQ';
  var map = new mapboxgl.Map({
    container: 'map', // container id
    style: window.mapStyle, //stylesheet location
    center: [45, 45], // starting position
    zoom: 1 // starting zoom
  });

  map.on('load', function () {
    map.addSource('quakes', {
      type: 'geojson',
      data: 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson'
    });

    var options = { type: 'circle', source: 'quakes' },
        alerts = ['green', 'yellow', 'orange', 'red'],
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
      options.paint = {
        'circle-radius': 1.75 * mag,
        'circle-color': alerts[Math.floor(mag / 4)],
        'circle-opacity': 0.3,
      };
      map.addLayer(options);
    }

    // quake alert styling
    for (alert = 0; alert < alerts.length; alert++) {
      options.transition = { duration: 0 };
      options.id = 'quakes-alert-' + alert;
      options.filter = [
        'all',
        ['==', 'alert', alerts[alert]]
      ];
      options.paint = {
        'circle-radius': 10,
        'circle-color': alerts[alert],
      };
      map.addLayer(options);
    }

    function animate(time) {
      var s = time / 1000;

      for (var i = 0; i < alerts.length; i++) {
        map.setPaintProperty('quakes-alert-' + i, 'circle-radius', 10 + Math.abs(5 * Math.sin(s)));
        map.setPaintProperty('quakes-alert-' + i, 'circle-opacity', Math.abs(Math.sin(s)) / 2);
      }

      requestAnimationFrame(animate);
    }

    animate(0);
  });
}());
