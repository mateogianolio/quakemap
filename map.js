(function () {
  'use strict';

  L.mapbox.accessToken = 'pk.eyJ1IjoibWF0ZW9naWFub2xpbyIsImEiOiJjaWs2MzRrcmMwMDRndnJrc2tibTZmeW8xIn0.-HNhp-sfXXy3DnCdgsNtpQ';
  var map = L.mapbox
    .map('map', 'mateogianolio.64d36a05')
    .setView([30, 0], 2);

  window.heat = L
    .heatLayer([], {
      maxZoom: 2,
      radius: 2,
      blur: 4,
      gradient: {
        '0.2': '#009688',
        '0.5': '#FFC107',
        '0.9': '#F44336'
      }
    })
    .addTo(map);

  var max = 600,
      i = 0;

  window.pause = true;
  window.quakes = 0;
  window.traverse = function(start) {
    if (window.pause || start.getTime() > Date.now())
      return;

    var month = 1000 * 60 * 60 * 24 * 30;
    var end = new Date(start.getTime() + month);

    var url = 'http://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson';
    url += '&starttime=';
    url += start.getFullYear() + '-' + (start.getMonth() + 1) + '-' + start.getDate();
    url += '&endtime=';
    url += end.getFullYear() + '-' + (end.getMonth() + 1) + '-' + end.getDate();

    var layer = L.mapbox
      .featureLayer()
      .loadURL(url)
      .on('ready', function () {
        if (window.pause)
          return;

        window.quakes += layer.getGeoJSON().metadata.count;
        layer.eachLayer(function (l) {
          var data = l.getLatLng();
          data.alt = l.feature.properties.mag / 10.0;

          window.heat.addLatLng(data);

          var time = new Date(l.feature.properties.time);
          var months = ['January', 'February', 'March', 'April', 'May', 'June',
                        'July', 'August', 'September', 'October', 'November',
                        'December'];
          document.getElementById('time').innerHTML =
            months[time.getMonth()] + ' ' + time.getFullYear() + ' ' +
            '(' + window.quakes + ' total)';
        });

        setTimeout(traverse.bind(null, end), 1000);
      });
  };
}());
