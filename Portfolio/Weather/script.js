const apiKey = `17b1e9eec00af16f60dfbafd972afe98`
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`
const cityNameBar = document.body.querySelector(`.inputCityName`)
const searchButton= document.body.querySelector(`.search-button`)
// 
const cityNameDisplay= document.body.querySelector(`.city`)
const temperatureText = document.body.querySelector(`.temp`)
const humidityText = document.body.querySelector(`.humidity`)
const windSpeedText = document.body.querySelector(`.wind`)
const weatherIconImage = document.body.querySelector(`.weather-icon`)
const weatherDiv = document.body.querySelector(`.weather`)
const note = document.body.querySelector(`.note-container`)





searchButton.addEventListener(`click`, function(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=`+ cityNameBar.value + `&appid=${apiKey}&units=metric` )
    .then((respon) => respon.json())
    .then((x) => {
        if(x.cod == 404 || x.main == undefined){   
            weatherDiv.classList.add(`disable`)
            note.classList.remove(`disable`)
        }else{
        console.log(x)
        cityNameDisplay.innerHTML = x.name
        temperatureText.innerHTML = Math.round(x.main.temp) + `°C`
        humidityText.innerHTML = x.main.humidity + `%`
        windSpeedText.innerHTML = Math.round(x.wind.speed) + `km/h`
        if(x.weather[0].main === "Clear"){
            weatherIconImage.src = "images/clear.png"
        } else if(x.weather[0].main === "Clouds"){
            weatherIconImage.src = "images/clouds.png"
        } else if(x.weather[0].main === "Drizzle"){
            weatherIconImage.src = "images/drizzle.png"
        } else if(x.weather[0].main === "Mist"){
            weatherIconImage.src = "images/mist.png"
        } else if(x.weather[0].main === "Rain"){
            weatherIconImage.src = "images/rain.png"
        } else if(x.weather[0].main === "Snow"){
            weatherIconImage.src = "images/snow.png"
        } 
        weatherDiv.classList.remove(`disable`)
        note.classList.add(`disable`)
        }
        
    })
})

// TODO minimize di awal
// TODO jika city name invalid munuclkan `invalid city name`