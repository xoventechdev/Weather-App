const aipurl = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}';
let body = document.querySelector('p');

async function getWeather(city) {
    const response = await fetch(aipurl.replace('{city name}', city).replace('{API key}', '96ec9cc2dda24013e1ac1a45d4b7aa1b'));
    const data = await response.json();
    
    body.innerHTML = `<span>
    <span id="city"></span>
    <span id="temp"></span>
    <span id="weather"></span>
</span>`;
}

getWeather('Doha');