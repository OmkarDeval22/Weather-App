
    const apiKey = "b1edc45f108aa87e3949a9ca263691c5";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${apiKey}&q=`;
    const weatherIcon = document.querySelector(".weatherimg");
    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const cardBG = document.querySelector(".card");
 
  
    async function checkWeather(city) {
        const response = await fetch(apiUrl + city);
        if (!response.ok) {
            alert("City not found");
            return;
        }
        const data = await response.json();
        console.log(data);
        

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        document.querySelector(".weatherType").innerHTML = data.weather[0].main;
        
        if(data.weather[0].main === "Clouds"){
            weatherIcon.src = "cloudy.png";
        }
        else if(data.weather[0].main === "Clear"){
            weatherIcon.src = "sunny.png";
        }
        else if(data.weather[0].main === "Rain"){
            weatherIcon.src = "rainy.png";
        }
        else if(data.weather[0].main === "Haze"){
            weatherIcon.src = "haze.png";
        } 
        else if(data.weather[0].main === "Mist"){
            weatherIcon.src = "mist.png";
        }
        else if(data.weather[0].main === "Drizzle"){
            weatherIcon.src = "drizzle.png";
        }
        else if(data.weather[0].main === "Fog"){
            weatherIcon.src = "fog.png";
        }
        else if(data.weather[0].main === "Snow"){
            weatherIcon.src = "snowy.png";
        }
        if(data.main.temp <= 10){
            document.querySelector(".card").style.background = "linear-gradient(135deg, #0f12cb,#509fff)";
        }
       else if(data.main.temp <= 20 && data.main.temp > 10 ){
            document.querySelector(".card").style.background = "linear-gradient(135deg, #96d9e7, #15a9ff)";
        }
       else if(data.main.temp > 20 && data.main.temp <= 28){
            document.querySelector(".card").style.background = "linear-gradient(135deg, #d4cb55,#dc824b)";
        }
       else if(data.main.temp > 28){
            document.querySelector(".card").style.background = "linear-gradient(135deg, #f50505,#ffc861)";
        }
        
        document.querySelector(".weather").style.display = "block";
    }
   
    
    
    searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            checkWeather(searchBox.value);
        }
    });
    console.log(weatherIcon)
;