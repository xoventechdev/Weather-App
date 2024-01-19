const aipurl = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=96ec9cc2dda24013e1ac1a45d4b7aa1b&units=metric';
let body = document.querySelector('p');
let serachClick = document.querySelector('#searchCity');


async function getWeather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=96ec9cc2dda24013e1ac1a45d4b7aa1b&units=metric`);
    const data = await response.json();
    
    body.innerHTML = `<span class="data">
    <span id="city">${data.name}</span>
    <span id="temp">${data.main.temp}</span>
    <span id="weather">${data.weather[0].description}</span>
</span>`;
}

getWeather('Doha');
serachClick.addEventListener('click', function () {
    let city = document.querySelector('#cityName').value;
    getWeather(city);
});

