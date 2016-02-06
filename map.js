(function () {
  'use strict';

  mapboxgl.accessToken = 'pk.eyJ1IjoibWF0ZW9naWFub2xpbyIsImEiOiJjaWs2MzRrcmMwMDRndnJrc2tibTZmeW8xIn0.-HNhp-sfXXy3DnCdgsNtpQ';
  var map = new mapboxgl.Map({
    container: 'map', // container id
    style: window.mapStyle, //stylesheet location
    center: [45, 45], // starting position
    zoom: 0 // starting zoom
  });

  var popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
  });

  map.on('load', function () {
    var date = window.location.search.replace('?', '&');
    map.addSource('quakes', {
      type: 'geojson',
      data: 'http://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson' + date
    });

    var colors = ['green', 'yellow', 'orange', 'red'],
        options,
        magnitude,
        i;

    for (i = 0; i < colors.length; i++) {
      magnitude = i * 2.5;

      options = { type: 'circle', source: 'quakes' };
      options.id = 'quake-' + i;
      options.filter = [
        'all',
        ['>=', 'mag', magnitude],
        ['<', 'mag', magnitude + 2.5]
      ];
      options.paint = {
        'circle-radius': 1.75 * magnitude,
        'circle-color': colors[i],
        'circle-opacity': magnitude / 12,
      };
      map.addLayer(options);
    }

    for (i = 0; i < colors.length; i++) {
      options = { type: 'circle', source: 'quakes' };
      options.id = 'quake-alert-' + i;
      options.interactive = true;
      options.filter = [
        'all',
        ['==', 'alert', colors[i]]
      ];
      options.paint = {
        'circle-radius': 0,
        'circle-color': colors[i],
        'circle-opacity': 0
      };
      map.addLayer(options);
    }

    function animate(time) {
      var f = Math.sin,
          abs = Math.abs,
          t = time / 1000,
          i;

      if (Math.cos(t) < 0)
        t += Math.PI;

      for (i = 0; i < colors.length; i++) {
        map.setPaintProperty('quake-alert-' + i, 'circle-radius', (i + 1) * 5 * (1 + f(t)));
        map.setPaintProperty('quake-alert-' + i, 'circle-opacity', 1 - f(t));
      }

      requestAnimationFrame(animate);
    }

    animate(0);

    map.on('mousemove', function (event) {
      map.featuresAt(event.point, {
        radius: 10,
        includeGeometry: true,
        layer: ['quake-alert-0', 'quake-alert-1', 'quake-alert-2', 'quake-alert-3']
      }, function (error, features) {
        map.getCanvas().style.cursor = (!error && features.length) ? 'pointer' : '';

        if (error || !features.length) {
          popup.remove();
          return;
        }

        var feature = features[0];
        popup
          .setLngLat(feature.geometry.coordinates)
          .setText(feature.properties.mag)
          .addTo(map);
      });
    });
  });
}());
