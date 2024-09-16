const API_KEY = "f24dc2a63c1af5fee7608b9e0cc542b5";
const searchTemperature = () => {
    const city = document.getElementById("city-name").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            if (data.cod === "404") {
                alert("City not found!");
            } else {
                updateForecast(data);
            }
        })
        .catch((error) => {
            console.error("Error fetching weather data:", error);
            alert("An error occurred while fetching weather data.");
        });
};
const updateForecast = (data) => {
    const temp = data.main.temp;
    const weather = data.weather[0].description;
    document.getElementById("temp-6-am").innerText = `${(temp - 3).toFixed(1)}`;
    document.getElementById("temp-9-am").innerText = `${temp.toFixed(1)}`;
    document.getElementById("temp-12-pm").innerText = `${(temp + 2).toFixed(1)}`;
    document.getElementById("temp-3-pm").innerText = `${(temp + 3).toFixed(1)}`;
    document.getElementById("temp-6-pm").innerText = `${temp.toFixed(1)}`;
    document.getElementById("temp-9-pm").innerText = `${(temp - 2).toFixed(1)}`;
};
document.getElementById("city-name").addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        searchTemperature();
    }
});
