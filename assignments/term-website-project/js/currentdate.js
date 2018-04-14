var d = new Date();
var year = d.getYear();
if(year < 1000) {
	year +=1900
}
var weekday = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
var currentday = weekday[d.getDay()];
var month = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
var currentmonth = month[d.getMonth()];
var day = d.getDay();
var today = currentday + ", " + day + " " + currentmonth + " " + year;
document.getElementById("currentdate").innerHTML = today;