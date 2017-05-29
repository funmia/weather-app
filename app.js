var temperature;
var loc;
var desc;
var icon;
var humidity;
var wind;

window.onload = function() {
  temperature = document.getElementById("temperature");
  loc = document.getElementById("location");
  desc = document.getElementById("description");
  icon = document.getElementById("icon");
  humidity = document.getElementById("humidity");
  wind = document.getElementById("wind");
}

function sendRequest() {
  var myRequest = new XMLHttpRequest();
    myRequest.onreadystatechange = function() {
      if (myRequest.readyState == 4) {
        var data = JSON.parse(myRequest.responseText);
        console.log(data);
        getWeather(data);
      }
    };
  myRequest.open('GET',"http://api.openweathermap.org/data/2.5/weather?q=London&APPID=9de3faeca88c17887b1c8ba5b63ac99f", true);
  myRequest.send();
}
sendRequest();

function getWeather(data) {
  weather = {}
  weather.temperature = data.main.temp;
  weather.location = data.name;
  weather.description = data.weather[0].description;
  weather.code = data.weather[0].id;
  weather.humidity = data.main.humidity;
  weather.wind = data.wind.speed;

  showWeather(weather);
}

function showWeather(weather) {
  temperature.innerHTML = weather.temperature;
  loc.innerHTML = weather.location;
  desc.innerHTML = weather.description;
  icon.src = "imgs/codes/" + weather.code + ".png";
  humidity.innerHTML = weather.humidity;
  wind.innerHTML = weather.wind;
}
