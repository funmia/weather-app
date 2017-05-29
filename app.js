var icon;
var loc;
var desc;

window.onload = function() {
  icon = document.getElementById("icon");
  loc = document.getElementById("location");
  desc = document.getElementById("description");
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
  weather.location = data.name;
  weather.code = data.weather[0].id;
  weather.description = data.weather[0].description;

  showWeather(weather);
}

function showWeather(weather) {
  icon.src = "imgs/codes/" + weather.code + ".png"
  loc.innerHTML = weather.location;
  desc.innerHTML = weather.description;
}
