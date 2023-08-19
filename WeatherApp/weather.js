$(document).ready(function () {
  const baseUrl = "http://api.weatherapi.com/v1/";
  const apiKey = "ac513c2ccca6427c912105247231808";
  $("#cityname").on("keypress", function () {
    const city = $("#cityname").val();
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
        $("#weatherInfo").html("<p>Error featching weather data.</p>");
      },
    });
  });

  function displayWeather(data) {
    const name = data.location.name;
    const state = data.location.region;
    const country = data.location.country;
    const temp = data.current.temp_c;
    const condi = data.current.condition.text;
    const uv = data.current.uv;
    var text = `<div class="temp"><h1>${temp + "°C"} </h1>
    <p class="summary">${condi}</p></div>
   <h2>${name}</h2><h2>${"Region:" + state}</h2><h2>${"Country:" + country}</h2>
    <p>${"uv index:" + uv}</p>`;
    $("#weatherInfo").html(text);
  }
});
