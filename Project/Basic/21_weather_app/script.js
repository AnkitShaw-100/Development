async function getWeather() {
    const city = document.getElementById('city').value; // Get the city name from the input
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key

    try {
        // Fetch weather data for the specified city and country (India - IN)
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}`);
        const data = await response.json();

        if (response.ok) {
            const tempCelsius = (data.main.temp - 273.15).toFixed(2); // Convert Kelvin to Celsius
            document.getElementById('weather').innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${tempCelsius}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
            `;
        } else {
            document.getElementById('weather').innerHTML = `<p>${data.message}</p>`; // Display error message from API
        }
    } catch (error) {
        document.getElementById('weather').innerHTML = `<p>Failed to fetch weather data. Please try again later.</p>`;
    }
}
