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
		$('#icon').html('<img src="/../images/sun2.png"/>');
		document.body.style.backgroundColor = '#ffd11a';
		
	} else if (weatherType === 'Clouds') {
		$('#icon').html('<img src="/../images/Clouds.png"/>');
		document.body.style.backgroundColor = '#666699';	
	} else if (weatherType === 'Rain') {
		$('#icon').html('<img src="../../images/Rain.png" alt="rain"/>');
		document.body.style.backgroundColor = '#336699';
	} else if (weatherType === 'Snow') {
		document.body.style.backgroundColor = '#99ccff';
	}
	
}

function getMusic(temp, weatherType) {
	if (weatherType === 'Clear') {
		$('#spotifyPlayer').html('<iframe src="https://embed.spotify.com/?uri=spotify:user:nanzabananza:playlist:5UetXoViyYLhMwsgkQoCmK" width="300" height="400" frameborder="0" allowtransparency="true"></iframe>');
	} else if (weatherType === 'Clouds') {
		$('#spotifyPlayer').html('	<iframe src="https://embed.spotify.com/?uri=spotify:user:nanzabananza:playlist:7aWWQhEbJ3Ww0I3ucRLmRB" width="300" height="400" frameborder="0" allowtransparency="true"></iframe>');
	} else if (weatherType === 'Rain') {
		$('#spotifyPlayer').html('<iframe src="https://embed.spotify.com/?uri=spotify:user:nanzabananza:playlist:0MYrS5PnbHYR0GREdEXpIv" width="300" height="400" frameborder="0" allowtransparency="true"></iframe>');
	} else if (weatherType === 'Snow') {
		$('#spotifyPlayer').html('<iframe src="https://embed.spotify.com/?uri=spotify:user:nanzabananza:playlist:58LCGWBgr1m6DBaRkdeKZN" width="300" height="400" frameborder="0" allowtransparency="true"></iframe>');

	}
}


