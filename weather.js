const apiKey = 'df0a6549f9fa4817e5e16f66a8351143';
const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=Cancun&units=metric&appid=${apiKey}`;

fetch(apiURL)
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
    return response.json();
  })
  .then(data => {
    document.getElementById("temp").textContent = data.main.temp + "°C";
    document.getElementById("feels").textContent = data.main.feels_like + "°C";
  })
  .catch(error => {
    console.error("Error fetching weather:", error);
    document.querySelector(".weather").innerHTML = "<p>Unable to load weather data.</p>";
  });