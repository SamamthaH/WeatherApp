/*
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>URL</key>
	<string>https://github.com/CodeExplainedRepo/Weather-App-JavaScript/blob/master/app.js</string>
</dict>
</plist>
*/

//SELECT ELEMENTS
const notificationElement = document.querySelector(".notification");
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");

//App data
const weather = {};
weather.temperature = {
    unit: "celsius"
}

//APP CONSTS AND VARS
const KELVIN = 273;
//API KEY
const key = "6d9920a4cbfbac390a4a68e9864adab9";

//CHECK IF BROWSER SUPPORTS GEOLOCATION
if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
}

//SET USER'S POSITION
function setPosition(position)
{
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    
    getWeather(latitude, longitude);
}

//SHOW ERROR WHEN THERE IS AN ISSUE WITH GEOLOCATION SERVICE
function showError(error)
{
    notificationElement.style.display = "block";
    notificationElement.innerHTML = <p>${error.message}</p>;
}


