$(document).ready(function () {
  const baseUrl = "http://api.weatherapi.com/v1/";
  const apiKey = "ac513c2ccca6427c912105247231808";

  $("#cityname").on("keypress", function () {
    const city = $("#cityname").val();
    $(".weatherInfo").css("display", "block");
    console.log(city);
    const url = `${baseUrl}current.json?key=${apiKey}&q=${city}`;
    console.log(url);
    $.ajax({
      url: url,
      method: "GET",
      success: function (data) {
        console.log(data);
        displayWeather(data);
      },
      error: function () {
        $(".weatherInfo").html("<p>Error featching weather data.</p>");
      },
    });
  });
  // Display Weather
  function displayWeather(data) {
    const name = data.location.name;
    const state = data.location.region;
    const country = data.location.country;
    const temp = data.current.temp_c;
    const condi = data.current.condition.text;
    const uv = data.current.uv;
    var text = `<div class="temp"><h1>${temp + "°C"} </h1>
   <div class = "summary"> <p id="text">${condi}</p>
    <p id="uv">${"uv index:" + uv}</p>
    </div></div>
    <div class= "location"><h1 id="city">${name}</h1><h2 id="state">${state}</h2><h2 id="country">${country}</h2></div>
    `;
    // Changing styles according to weather condition
    if (condi == "Rain") {
      $(".weatherInfo").css(
        "background-image",
        "url('/WeatherApp/images/rain.jpg')"
      );
      $(".temp").css("color", "Silver");
    } else if (condi == "Sunny") {
      $(".weatherInfo").css(
        "background-image",
        "url('/WeatherApp/images/Sunny.jpg')"
      );
      $(".temp").css("color", "blue");
    } else if (condi == "Mist") {
      $(".weatherInfo").css(
        "background-image",
        "url('/WeatherApp/images/Mist.jpg')"
      );
      $("body").css("background", "rgb(142,158,173)");
      $("body").css(
        "background",
        "linear-gradient(90deg, rgba(142,158,173,1) 34%, rgba(0,87,54,1) 75%)"
      );
      $(".temp").css("color", "white");
    } else if (condi == "Clear") {
      $(".weatherInfo").css(
        "background-image",
        "url('/WeatherApp/images/Clear.jpg')"
      );
      $(".temp").css("color", "white");
      $("body").css("background", " rgb(101, 162, 218)");
      $("body").css(
        "background",
        "linear-gradient(90deg,rgba(101, 162, 218, 1) 23%,rgba(198, 204, 223, 1) 81)"
      );
    }
    $(".weatherInfo").html(text);
  }
});
