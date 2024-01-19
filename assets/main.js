const aipurl = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric';
let body = document.querySelector('p');

async function getWeather(city) {
    const response = await fetch(aipurl.replace('{city name}', city).replace('{API key}', '96ec9cc2dda24013e1ac1a45d4b7aa1b'));
    const data = await response.json();


    
    body.innerHTML = `<span class="data">
    <span id="city">${data.name}</span>
    <span id="temp">${data.main.temp}</span>
    <span id="weather">${data.weather[0].description}</span>
</span>`;
}

getWeather('Doha');