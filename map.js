(function () {
  'use strict';

  L.mapbox.accessToken = 'pk.eyJ1IjoibWF0ZW9naWFub2xpbyIsImEiOiJjaWs2MzRrcmMwMDRndnJrc2tibTZmeW8xIn0.-HNhp-sfXXy3DnCdgsNtpQ';
  var map = L.mapbox
    .map('map', 'mateogianolio.64d36a05')
    .setView([0, 0], 3);

  map.zoomControl.removeFrom(map);

  window.heat = L
    .heatLayer([], {
      maxZoom: 3,
      radius: 3,
      blur: 6,
      gradient: {
        '0': 'green',
        '0.6': 'yellow',
        '0.9': 'red'
      }
    })
    .addTo(map);

  var max = 600,
      i = 0;

  window.pause = true;
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

    console.log(url);

    var layer = L.mapbox
      .featureLayer()
      .loadURL(url)
      .on('ready', function () {
        layer.eachLayer(function (l) {
          var data = l.getLatLng();
          data.alt = l.feature.properties.mag / 10.0;

          window.heat.addLatLng(data);

          var time = new Date(l.feature.properties.time);
          var months = ['January', 'February', 'March', 'April', 'May', 'June',
                        'July', 'August', 'September', 'October', 'November',
                        'December'];
          document.getElementById('time').innerHTML = months[time.getMonth()] + ' ' + time.getFullYear();
        });

        setTimeout(traverse.bind(null, end), 500);
      });
  };
}());
