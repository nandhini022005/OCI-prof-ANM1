// Replace with your OpenWeatherMap API key
const API_KEY = 'your-api-key';

async function getWeather() {
    const city = document.getElementById('city').value;
    if (!city) return alert('Please enter a city name.');

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) {
            alert('City not found!');
            return;
        }

        const { main, weather, wind } = data;
        const weatherInfo = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>Temperature: ${main.temp}°C</p>
            <p>Humidity: ${main.humidity}%</p>
            <p>Weather: ${weather[0].description}</p>
            <p>Wind Speed: ${wind.speed} m/s</p>
        `;

        document.getElementById('weather-info').innerHTML = weatherInfo;
    } catch (error) {
        console.error(error);
        alert('Failed to fetch weather data.');
    }
}
