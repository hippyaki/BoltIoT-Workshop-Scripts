

$(document).ready(function() {
  navigator.geolocation.getCurrentPosition(success, error);
  
  function success(pos){
    var lat = pos.coords.latitude;
    var long = pos.coords.longitude;
    var api = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"; //weather api
    weather(lat, long, api);
  }

  function error() {
    console.log("There was an error");
  }

  function weather(lat, long, api) {
    var URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}`;
    $.getJSON(URL, function(data) {
      display(data);
    });
  }

  function display(data) {
    var city = data.name.toUpperCase();
    var temp =
      Math.round(data.main.temp_max-273.15) +
      "&deg; C | " +
      Math.round(Math.round(data.main.temp_max-273.15) * 1.8 + 32) +
      "&deg; F";
    var desc = data.weather[0].description;
    var date = new Date();

    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    
    if (data.weather[0].main == "Sunny" || data.weather[0].main == "sunny") {
      $(".weathercon").html(
        "<i class='fas fa-sun' style='color: #1ECD97;'></i>"
      );
      $(".weather").html(
        "Sunny"
      );

    } 
    else if (data.weather[0].main == "Rain" || data.weather[0].main == "rain"){
      $(".weathercon").html(
        "<i class='fas fa-cloud-rain' style='color: #1ECD97;'></i>"
      );
      $(".weather").html(
        "Rain"
      );
    }
    else if (data.weather[0].main == "Clouds" || data.weather[0].main == "cloud"){
      $(".weathercon").html(
        "<i class='fas fa-cloud' style='color: #1ECD97;'></i>"
      );
      $(".weather").html(
        "Cloudy"
      );
    }
    else if (data.weather[0].main == "Clear" || data.weather[0].main == "clear"){
      $(".weathercon").html(
        "<i class='fas fa-moon' style='color: #1ECD97;'></i>"
      );
      $(".weather").html(
        "Clear Sky"
      );
    }
    else if (data.weather[0].main == "Thunder" || data.weather[0].main == "thunder" || data.weather[0].main == "storm"){
      $(".weathercon").html(
        "<i class='fas fa-bolt' style='color: #1ECD97;'></i>"
      );
      $(".weather").html(
        "Thunder Storm"
      );
    }
    else if (data.weather[0].main == "Haze" || data.weather[0].main == "haze"){
      $(".weathercon").html(
        "<i class='fas fa-smog' style='color: #1ECD97;'></i>"
      );
      $(".weather").html(
        "Haze"
      );
    }
    else if (data.weather[0].main == "Mist" || data.weather[0].main == "mist"){
      $(".weathercon").html(
        "<i class='fas fa-smog' style='color: #1ECD97;'></i>"
      );
      $(".weather").html(
        "Mist"
      );
    }
    else if (data.weather[0].main == "Thunderstorm" || data.weather[0].main == "thunderstorm"){
      $(".weathercon").html(
        "<i class='fas fa-bolt' style='color: #1ECD97;'></i>"
      );
      $(".weather").html(
        "Thunderstorm"
      );
    }
    else{
      $(".weathercon").html(
        "<i class='fas fa-exclamation-circle' style='color: #1ECD97;'></i>"
      );
      $(".weather").html(
        "Not Available"
      );
    }

    var minutes =
      date.getMinutes() < 11 ? "0" + date.getMinutes() : date.getMinutes();
    var date =
      weekday[date.getDay()].toUpperCase() +
      " | " +
      months[date.getMonth()].toUpperCase().substring(0, 3) +
      " " +
      date.getDate() +
      " | " +
      date.getHours() +
      ":" +
      minutes;

    if (Math.round(data.main.temp_max) > 35) {
      bg_color = "rgba(252, 105, 32, 0.05)";
    } 
    else if ((Math.round(data.main.temp_max) < 35) || (Math.round(data.main.temp_max) > 20)) { 
      bg_color = "rgba(175, 205, 158, 0.1)";
    }
    else{
      bg_color = "rgba(107, 129, 158, 0.1)";
    }
     
    $(".location").html(city);
    $(".temp").html(temp);
    $(".date").html(date);
   // $(".box").css("background", bg_color);
   // $(".location").css("color", font_color);
   // $(".temp").css("color", font_color);
    
  }
});

