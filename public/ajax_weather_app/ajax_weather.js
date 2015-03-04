
    //OPEN WEATHER MAP API
    var weatherDisplay = $('#weather');
    var currentWeather; 
    currentWeather = $.get('http://api.openweathermap.org/data/2.5/weather?q=San+Antonio,Texas');
    var wet = function weather (data) {
        var weatherString = ''
        //row 
        weatherString += '<div class="row">'
        weatherString += '<div class="col-md-12">'
        weatherString += '</div>'
        weatherString += '</div>'
        //row
        weatherString += '<div class="row">'
        weatherString += '<div class="col-md-12">'
        weatherString += '<img class = "center-block" src="http://openweathermap.org/img/w/' + data.weather[0].icon + '.png"/>'
        weatherString += '<p>Low: '+ parseInt((data.main.temp_min -273.15) * 1.8 + 32) + '°F</p>'
        weatherString += '<p>High: '+ parseInt((data.main.temp_max -273.15) * 1.8 + 32) + '°F</p>'
        weatherString += '<p class="currentWeather">' + parseInt((data.main.temp -273.15) * 1.8 + 32) + '°F</p>'
        weatherString += '</div>'
        weatherString += '</div>'
        //row
        weatherString += '<div class="row">'
        weatherString += '<div class="col-md-12">'
        weatherString += '<p>humidity: ' + data.main.humidity+ '</p>'
        weatherString += '<p>pressure: ' + data.main.pressure + '</p>'
        weatherString += '<p>wind: ' + data.wind.speed +' mps'+ '</p>'
        weatherString += '</div>'
        weatherString += '</div>'      

        $('#weather').html(weatherString)
    };
    //calls ajax request
    currentWeather.done(wet);
    currentWeather.fail(function() {
        console.log('500,error connecting to oopen weather map');
    });

// GOOGLE MAPS API
var geocoder;
var map;

//initialize map
function initialize() {
  geocoder = new google.maps.Geocoder();
  var latlng = new google.maps.LatLng(29.4167, -98.5000);
  var mapOptions = {
    zoom: 8,
    center: latlng
  };
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
};

//function changes address and weather
function codeAddress() {
  var address = document.getElementById('address').value;
  geocoder.geocode( { 'address': address}, function(results, status){
    if (status == google.maps.GeocoderStatus.OK){
      map.setCenter(results[0].geometry.location);
      currentWeather = $.get('http://api.openweathermap.org/data/2.5/weather?lat='+results[0].geometry.location.lat()+'&lon='+results[0].geometry.location.lng());
      //refreshes ajax request with new location for weather api
      currentWeather.done(wet);
    currentWeather.fail(function() {
        console.log('500,error connecting to oopen weather map');
    });

      //drops marker on screen based on location
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
      });
    
    }else{
      alert('Geocode was not successful for the following reason: ' + status);
    };

  });
};

//calls map to load when screen is loaded
google.maps.event.addDomListener(window, 'load', initialize);

//click event that calls codeAddress() function
$('#geo').click(codeAddress);
