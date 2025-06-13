
async function getWeather(city) {
    const apiKey = 'e0771e3e5926d8aa27d0b656844436b4';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('City not found');
        return await response.json();
    } catch (error) {
        throw error;
    }
}

async function getWeatherByCity() {
    const city = document.getElementById('cityInput').value;
    const resultDiv = document.getElementById('weatherResult');
    resultDiv.innerHTML = "Loading...";

    try {
        const data = await getWeather(city);
        resultDiv.innerHTML = `
            <h2>Weather in ${data.name}, ${data.sys.country}</h2>
            <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
            <p><strong>Description:</strong> ${data.weather[0].description}</p>
            <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
        `;
    } catch (err) {
        resultDiv.innerHTML = `<p style="color:red;">Error: ${err.message}</p> `;
        // resultDiv.innerHTML = `<img src="/assets/message/not-found.png" style="width:200px; height:200px;">`
    }
}

