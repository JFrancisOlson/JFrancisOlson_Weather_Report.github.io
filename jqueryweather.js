.ajax({
  url: 'https://weather.cit.api.here.com/weather/1.0/report.json',
  type: 'GET',
  dataType: 'jsonp',
  jsonp: 'jsonpcallback',
  data: {
    product: 'observation',
    latitude: '52.516',
    longitude: '13.389',
    oneobservation: 'true',
    app_id: '{YOUR_APP_ID}',
    app_code: '{YOUR_APP_CODE}'
  },
  success: function (data) {
    alert(JSON.stringify(data));
  }
});