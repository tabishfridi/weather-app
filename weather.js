const apiKey = "aeb31c6814bce4f30a7a2909e045b544";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon"); 


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){;
    weatherIcon.src = "https://th.bing.com/th/id/OIP.9rvx7yOQneHhCPjRkBmq6gEsDh?w=262&h=187&c=7&r=0&o=5&pid=1.7";
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "https://th.bing.com/th/id/OIP.Q_zyFtKIwRG6ov_I2pWgXAHaEL?w=292&h=180&c=7&r=0&o=5&pid=1.7";
    }else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "https://th.bing.com/th/id/OIP.7qUeIJclALLwjwRLlQlynwHaFQ?w=286&h=203&c=7&r=0&o=5&pid=1.7";
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "https://th.bing.com/th/id/OIP.YQV4B-X66KFiyy5lJeQ-dAHaFP?w=264&h=187&c=7&r=0&o=5&pid=1.7";
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "https://th.bing.com/th/id/OIP.pkJ_J78DRj3X6h0VEvAINwHaDR?w=327&h=154&c=7&r=0&o=5&pid=1.7";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

    }


}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

checkWeather();