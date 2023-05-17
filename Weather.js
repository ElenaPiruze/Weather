let apiKey = "1ee232fd164032d2936af9bc776c06fd";
let weatherInfoDiv = document.getElementById("info");
let button = document.getElementById("btn");

button.addEventListener("click", () => {
  let cityInput = document.getElementById("city").value;
  let weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`;

  fetch(weatherAPI)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let city = data.name;
      let temp = Math.floor(data.main.temp - 273.15);
      let description = data.weather[0].description;

      weatherInfoDiv.innerHTML = `<p>Weather in ${city}:</p>
                                  <p>Temperature: ${temp}C</p>
                                  <p>Description: ${description}</p>`;
    })
    .catch((error) => console.log(error));
});
