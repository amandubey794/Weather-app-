async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "your_openweather_api_key"; // Replace with your API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const result = document.getElementById("result");
  result.innerHTML = "Loading...";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      result.innerHTML = "City not found. Try again.";
      return;
    }
    const data = await response.json();
    const { name, main, weather } = data;
    result.innerHTML = `
      <h3>${name}</h3>
      <p><strong>${weather[0].main}</strong> - ${weather[0].description}</p>
      <p>🌡️ Temp: ${main.temp} °C</p>
      <p>💧 Humidity: ${main.humidity}%</p>
    `;
  } catch (error) {
    result.innerHTML = "Error fetching data.";
  }
}
