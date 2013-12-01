var cityNames = [
  {
    name:"Sydney, AU",
    latitude: -33.8600,
    longitude: 151.2111
  },
  {
    name:"Melbourne, AU",
    latitude: -37.8141,
    longitude: 144.9632
  },
  {
    name:"Brisbane, AU",
    latitude: -27.4710,
    longitude: 153.0234
  },
  {
    name:"Darwin, AU",
    latitude: -12.4628,
    longitude: 130.8417
  },
  {
    name:"Adelaide, AU",
    latitude: -34.9286,
    longitude: 138.5999
  },
  {
    name:"Hobart, AU",
    latitude: -42.8819,
    longitude: 147.3238
  },
  {
    name:"Perth, AU",
    latitude: -31.9530,
    longitude: 115.8574
  }
]

$(document).ready(function () {

  $( ".change-location" ).click(function() {
    $('#widget').fadeOut();
    $('#weekly-forecast').fadeOut();
    $('header').fadeOut();
    $('#menu-icon').fadeOut();
    $('.location-dialog').fadeIn();
  });

  $( "#location-header" ).click(function() {
    $('#widget').fadeIn();
    $('header').fadeIn();
    $('#menu-icon').fadeIn();
    $('#weekly-forecast').fadeIn();
    $('.location-dialog').fadeOut();
  });

  $( "#menu-icon" ).click(function() {
    $('#credits').fadeIn();
    $('#credits-header').fadeIn();
    $('#menu-icon').fadeOut();
  });

  $( "#credits-header" ).click(function() {
    $('#credits').fadeOut();
    $('#credits-header').fadeOut();
    $('#menu-icon').fadeIn();
  }) 

});


function renderData(data) {
  console.log(data);
  weatherDescription = $('.weather-description');
  dayZeroMin = $('.day-0 .min');
  dayZeroMax = $('.day-0 .max');
  dayOneMin = $('.day-1 .min');
  dayOneMax = $('.day-1 .max');
  dayTwoMin = $('.day-2 .min');
  dayTwoMax = $('.day-2 .max');
  dayThreeMin = $('.day-3 .min');
  dayThreeMax = $('.day-3 .max');
  dayFourMin = $('.day-4 .min');
  dayFourMax = $('.day-4 .max');
  dayFiveMin = $('.day-5 .min');
  dayFiveMax = $('.day-5 .max');
  daySixMin = $('.day-6 .min');
  daySixMax = $('.day-6 .max');

  weatherDescription.html("<h2>" + Math.round(data.currently.temperature) + "&deg;C</h2><p>" + data.currently.summary + "</p>");
  dayZeroMin.html("<p>" + Math.round(data.daily.data[0].temperatureMin) + "</p>");
  dayZeroMax.html("<p>" + Math.round(data.daily.data[0].temperatureMax) + "</p>");
  dayOneMin.html("<p>" + Math.round(data.daily.data[1].temperatureMin) + "</p>");
  dayOneMax.html("<p>" + Math.round(data.daily.data[1].temperatureMax) + "</p>");
  dayTwoMin.html("<p>" + Math.round(data.daily.data[2].temperatureMin) + "</p>");
  dayTwoMax.html("<p>" + Math.round(data.daily.data[2].temperatureMax) + "</p>");
  dayThreeMin.html("<p>" + Math.round(data.daily.data[3].temperatureMin) + "</p>");
  dayThreeMax.html("<p>" + Math.round(data.daily.data[3].temperatureMax) + "</p>");
  dayFourMin.html("<p>" + Math.round(data.daily.data[4].temperatureMin) + "</p>");
  dayFourMax.html("<p>" + Math.round(data.daily.data[4].temperatureMax) + "</p>");
  dayFiveMin.html("<p>" + Math.round(data.daily.data[5].temperatureMin) + "</p>");
  dayFiveMax.html("<p>" + Math.round(data.daily.data[5].temperatureMax) + "</p>");
  daySixMin.html("<p>" + Math.round(data.daily.data[6].temperatureMin) + "</p>");
  daySixMax.html("<p>" + Math.round(data.daily.data[6].temperatureMax) + "</p>");
};


$(document).ready(function() {
  var availableTags = [
    "Sydney, AU",
    "Melbourne, AU",
    "Brisbane, AU",
    "Darwin, AU",
    "Adelaide, AU",
    "Hobart, AU",
    "Perth, AU",
    "Canberra, AU",
  ];

  $("#city").autocomplete({
    source: availableTags,
    appendTo: ".location-dialog",
    focus: function( event, ui ) {}
  });

  $( "#city" ).on( "autocompletefocus", function( event, ui ) {
  } );

  function getWeatherData() {
   var apiKey = '2369dbdb80831f01a1faab100ad71087';
   var url = 'https://api.forecast.io/forecast/';
   var latitude = -33.8600;
   var longitude = 151.2111;
   var data;
   $.getJSON(url + apiKey + "/" + latitude + "," + longitude + "?units=si&callback=?", function (data) {
     renderData(data);
   });
  }

  getWeatherData();

  today=new Date()
  thisDay=today.getDay()

});


$(document).ready(function () {

  function handleKeyPress(event){
    if(event.charCode == 13){
      var cityInput = $("#city");
    }
  }

  $("#city").keypress(handleKeyPress);

});

  // var cityInput = $("#city-input");
  // var countryInput = $("#country-input");
  // loadWeather(cityInput.val(), countryInput.val());
