const apikey = "3265874a2c77ae4a04bb96236a642d2f";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
const loadingEl = document.getElementById("loading");

const url = (city) =>
    `https://www.metaweather.com/api/location/search/?query=${city}`;

async function getWeatherByLocation(city) {
    console.log((city));
    showLoading(true); // Show loading animation
    try {
        const resp = await fetch(url(city));
        const respData = await resp.json();

        if (respData.cod === 200) {
            addWeatherToPage(respData);
        } else {
            showError(`City not found. Please try again.`);
        }
    } catch (error) {
        showError("Error fetching data. Please check your connection.");
    } finally {
        showLoading(false); // Hide loading animation
    }
}

function addWeatherToPage(data) {
    const temp = KtoC(data.main.temp);

    const weather = document.createElement("div");
    weather.classList.add("weather");

    weather.innerHTML = `
        <h2>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather Icon" />
            ${temp}°C 
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather Icon" />
        </h2>
        <small>${data.weather[0].main}</small>
    `;

    // Cleanup
    main.innerHTML = "";
    main.appendChild(weather);
}

function KtoC(K) {
    return Math.floor(K - 273.15);
}

function showError(message) {
    const weather = document.createElement("div");
    weather.classList.add("weather");
    weather.innerHTML = `<p>${message}</p>`;
    main.innerHTML = "";
    main.appendChild(weather);
}

function showLoading(show) {
    loadingEl.style.display = show ? "block" : "none";
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const city = search.value.trim();
    console.log(city);

    if (city) {
        getWeatherByLocation(city);
    }
});
