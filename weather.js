const apiURL = "https://api.weatherapi.com/v1/current.json?q=Manzanillo&key=4e5e576e864142e780a45600252403";

fetch(apiURL)
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
    return response.json();
  })
  .then(data => {
    document.getElementById("temp").textContent = data.current.temp_c;
    document.getElementById("feels").textContent = data.current.feelslike_c;
  })
  .catch(error => {
    console.error("Error fetching weather:", error);
    document.querySelector(".weather").innerHTML = "<p>Unable to load weather data.</p>";
  });