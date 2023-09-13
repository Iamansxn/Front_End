// $(document).ready(function () {
//   const baseUrl = "http://api.weatherapi.com/v1/";
//   const apiKey = "ac513c2ccca6427c912105247231808";
//   $("#cityname").on("keypress", function () {
//     const city = $("#cityname").val();
//     $(".weatherInfo").css("display", "block");
//     console.log(city);
//     const url = `${baseUrl}current.json?key=${apiKey}&q=${city}`;
//     console.log(url);
//     $.ajax({
//       url: url,
//       method: "GET",
//       success: function (data) {
//         console.log(data);
//         displayWeather(data);
//       },
//       error: function () {
//         $(".weatherInfo").html("<p>Error featching weather data.</p>");
//       },
//     });
//   });
//   // Display Weather
//   function displayWeather(data) {
//     const name = data.location.name;
//     const state = data.location.region;
//     const country = data.location.country;
//     const temp = data.current.temp_c;
//     const condi = data.current.condition.text;
//     const uv = data.current.uv;
//     const icon = data.current.icon;
//     var text = `
//     <div class="temp">
//       <h1>${temp + "°C"} </h1>
//     <div class = "summary">
//       <p id="text">${condi}</p>
//       <img src="${icon}" id="icon">
//       <p id="uv">${"uv index:" + uv}</p>
//       </div>
//     </div>
//     <div class= "location">
//       <h1 id="city">${name}</h1>
//       <h2 id="state">${state}</h2>
//       <h2 id="country">${country}</h2>
//       </div>
//     `;
// Changing styles according to weather condition
// if (condi == "Rain") {
//   $(".weatherInfo").css(
//     "background-image",
//     "url('/WeatherApp/images/Rain.jpg')"
//   );
//   $(".temp").css("background-image", "url('/WeatherApp/images/rain.png')");
//   $(".temp").css("color", "Silver");
// } else if (condi == "Sunny") {
//   $(".weatherInfo").css(
//     "background-image",
//     "url('/WeatherApp/images/Sunny.jpg')"
//   );
//   $(".temp").css("color", "blue");
// } else if (condi == "Mist") {
//   $(".weatherInfo").css(
//     "background-image",
//     "url('/WeatherApp/images/Mist.jpg')"
//   );
//   $("body").css("background", "rgb(142,158,173)");
//   $("body").css(
//     "background",
//     "linear-gradient(90deg, rgba(142,158,173,1) 34%, rgba(0,87,54,1) 75%)"
//   );
//   $(".temp").css("color", "white");
// } else if (condi == "Clear") {
//   $(".weatherInfo").css(
//     "background-image",
//     "url('/WeatherApp/images/Clear.jpg')"
//   );
//   $(".temp").css("color", "white");
//   $("body").css("background", " rgb(101, 162, 218)");
//   $("body").css(
//     "background",
//     "linear-gradient(90deg,rgba(101, 162, 218, 1) 23%,rgba(198, 204, 223, 1) 81)"
//   );
// }
//     let ChangeBackground = {
//       Rain: "/WeatherApp/images/Rain.jpg",
//       Mist: "/WeatherApp/images/Rain.jpg",
//     };
//     $(".weatherInfo").html(text);
//   }
// });
$(document).ready(function () {
  const baseUrl = "http://api.weatherapi.com/v1/";
  const apiKey = "ac513c2ccca6427c912105247231808";
  const $weatherInfo = $(".weatherInfo");

  $("#cityname").on("keypress", function (event) {
    if (event.which === 13) {
      const city = $("#cityname").val();
      $weatherInfo.css("display", "block");
      const url = `${baseUrl}current.json?key=${apiKey}&q=${city}`;

      $.ajax({
        url: url,
        method: "GET",
        success: function (data) {
          displayWeather(data);
          console.log(data);
        },
        error: function () {
          $weatherInfo.html("<p>Error fetching weather data.</p>");
        },
      });
    }
  });

  function displayWeather(data) {
    const {
      location: { name, region, country },
      current: {
        temp_c,
        condition: { text, icon },
        uv,
      },
    } = data;

    const weatherInfo = `
      <div class="temp">
        <h1>${temp_c}°C</h1>
        <div class="summary"> 
          <p id="text">${text}</p>
          <img src="${icon}" id="icon" alt="Weather Icon">
          <p id="uv">UV Index: ${uv}</p>
        </div>
      </div>
      <div class= "location">
        <h1 id="city">${name}</h1>
        <h2 id="state">${region}</h2> 
        <h2 id="country">${country}</h2>
      </div>
    `;

    // Define a mapping of conditions to background images
    const backgroundImages = {
      Rain: "/WeatherApp/images/Rain.jpg",
      Mist: "/WeatherApp/images/Mist.jpg",
      Sunny: "/WeatherApp/images/Sunny.jpg",
      Clear: "/WeatherApp/images/Clear.jpg",
    };

    // Get the background image based on the weather condition, default to a fallback image
    const backgroundImage =
      backgroundImages[text] || "/WeatherApp/images/default.jpg";

    // Apply the background image and text color
    $weatherInfo.css("background-image", `url('${backgroundImage}')`);
    $(".temp").css("background-image", "url('/WeatherApp/images/rain.png')");
    $(".temp").css(
      "color",
      text === "Mist" || text === "Clear" ? "white" : "blue"
    );

    // Update the HTML content
    $weatherInfo.html(weatherInfo);
  }
});
