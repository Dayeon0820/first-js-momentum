function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const API_KEY = "03b2c38227fdedf0e9f019ce36a71a9e";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(Response => Response.json()).then(data => { 
        const weather = document.querySelector(".weather_weather");
        const city= document.querySelector(".weather_city");
        const getIcon= document.querySelector(".weather-icon");
        const icon = data.weather[0].icon;
        const iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
        city.innerText = data.name
        getIcon.setAttribute('src', iconURL);
        });
    
}

function onGeoError(){
    alert("can't find your location")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

