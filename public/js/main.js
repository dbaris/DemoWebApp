var cityID = "4930956";
var client_id = '97811cc37e214cb2a6b7a3ead3cb0f9c'; 

var client_secret = clientSecret; 
var redirect_uri = 'http://localhost:8888/callback'; // Your redirect uri

function getWeather(searchQuery) {
	var url = 'http://api.openweathermap.org/data/2.5/weather?';
	var params = {
	    APPID: apiKey,
	    units: 'imperial'
	};
	
	if (searchQuery) {
			params.q = searchQuery;
		} else {
		    params.id = 4930956;
	  	}

	$.ajax(url + $.param(params), {
	    success: function (data) {
	      	$('#city').text(data.name);
	      	// console.log(data.name);
	      	$('#temp').text(data.main.temp + ' °F');
	      	// console.log(data.weather.main);
	      	$('#weather').text(data.weather[0].main);
	      	weatherCSS(data.main.temp, data.weather[0].main);
	      	getMusic(data.main.temp, data.weather[0].main);
	    }, error: function (error) {
	    	$('.error-message').text('Error connecting to weather server!');
	    }
  	});


}

function searchWeather() {
	var searchQuery = $('.search').val(); // grab value from search input
  	getWeather(searchQuery);
}

function weatherCSS(temp, weatherType) {
	if (weatherType === 'Clear') {
		if (temp > 60) {
			document.body.style.backgroundColor = '#ffe066';
		} else if (temp > 30) {
			document.body.style.backgroundColor = '#ff8080';
		} else {
			document.body.style.backgroundColor = '#d98cb3';
		}
	} else if (weatherType === 'Clouds') {
		document.body.style.backgroundColor = '#666699';	
	} else if (weatherType === 'Rain') {
		document.body.style.backgroundColor = '#336699';
	} else if (weatherType === 'Snow') {
		document.body.style.backgroundColor = '#99ccff';
	}
	
}

// function getMusic(temp, weatherType) {
// 	var url = 	GET "https://api.spotify.com/v1/search?q=tania%20bowra&type=artist"


// 	$.ajax(url + $.param(params), {
// 	    success: function (data) {
	      	
// 	    }, error: function (error) {
// 	    	$('.error-message').text('Error connecting to Spotify server!');
// 	    }
//   	});


// 	GET "https://api.spotify.com/v1/search?q=tania%20bowra&type=artist"
// }


