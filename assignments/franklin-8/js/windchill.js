function windchill() {
	var highT = parseInt(document.getElementById("highT").value);
	var lowT = parseInt(document.getElementById("lowT").value);
	var windSpeed = parseInt(document.getElementById("windSpeed").value);
	var avgT = (highT + lowT) / 2;
	var ans = 35.74 + (0.6215 * avgT) - (35.75 * (windSpeed ^ 0.16)) + (0.4275 * avgT * (windSpeed ^ 0.16));
	document.getElementById("windchillOutput").innerHTML = ans;
}