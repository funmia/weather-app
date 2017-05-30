const APPID = '9de3faeca88c17887b1c8ba5b63ac99f';
const url = "http://api.openweathermap.org/data/2.5/weather?q=London&APPID=" + APPID;
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

// function sendRequest() {
//   var myRequest = new XMLHttpRequest();
//     myRequest.onreadystatechange = function() {
//       if (myRequest.readyState == 4 && myRequest.status == 200) {
//         var data = JSON.parse(myRequest.responseText);
//         console.log(data);
//         getWeather(data);
//       }
//     };
//   myRequest.open('GET', url, true);
//   myRequest.send();
// }
// sendRequest();

fetch(url)
  .then((resp) => resp.json()) // Transform the data into json
  .then(function(data) {
    getWeather(data);
    })
  .catch(function(error) {
    console.log('error');
  });

function getWeather(data) {
  weather = {}
  weather.temperature = K2C(data.main.temp);
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

function K2F(k){
    return Math.round(k*(9/5)-459.67);
}

function K2C(k){
    return Math.round(k - 273.15);
}
