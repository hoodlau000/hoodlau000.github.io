var weatherObject = new XMLHttpRequest();

weatherObject.open('GET','http://api.wunderground.com/api/bffd108e29bbe840/conditions/q/MN/Franklin.json', true);

weatherObject.send();

weatherObject.onload = function() {
	var weatherInfo = JSON.parse(weatherObject.responseText);
	console.log(weatherInfo);

document.getElementById('currentWeather').innerHTML = weatherInfo.current_observation.weather;
document.getElementById('currentTemp').innerHTML = weatherInfo.current_observation.temp_f;
document.getElementById('currentWS').innerHTML = weatherInfo.current_observation.wind_gust_mph;
document.getElementById('weatherIcon').src = weatherInfo.current_observation.icon_url;
}