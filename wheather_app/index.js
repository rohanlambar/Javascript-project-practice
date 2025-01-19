  

  // code for api fetching 

const searchBtn = document.querySelector(".search-box button");
const searchInput = document.querySelector(".search-box input");
const cityName = document.querySelector("#cityname-display");
const tempDisplay = document.querySelector("#temp-display");
const humidityDisplay = document.querySelector("#humidity-display");
const windspeedDisplay = document.querySelector("#windspeed-display");
const weatherImage = document.querySelector(".temp img");
const weatherdisplay = document.querySelector(".weather");
const error = document.querySelector('.error');
searchBtn.addEventListener("click",getWheather);
async function getWheather(){
  const apiKey = "8cde61cd6f6d854014518e46f81eb3a8"
  const city = searchInput.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${city}&units=metric`;
  
  try{
   const result = await fetch(url)
   if(!result.ok){
    throw new Error("error while fetching");
   } error.style.display = "none";
     weatherdisplay.style.display = "block";
     const data = await result.json();
     cityName.innerHTML = `${city}`;
     tempDisplay.innerHTML = `${Math.round(data.main.temp)}°c `
     humidityDisplay.innerHTML = `${data.main.humidity} %`;
     windspeedDisplay.innerHTML = `${data.wind.speed} Km/h`;
     if(data.weather[0].main === 'Clear')  weatherImage.src = './images/clear.png';
     else if(data.weather[0].main === 'Snow') weatherImage.src = './images/snow.png';
     else if(data.weather[0].main === 'Clouds') weatherImage.src = './images/clouds.png';
     else if(data.weather[0].main === 'Mist') weatherImage.src = './images/mist.png';
     else if(data.weather[0].main === 'Rain') weatherImage.src = './images/rain.png';
     else weatherImage.src = './images/drizzle.png';
     
     console.log(data);                      
  }
  catch(err)   {
    console.error(" their has been error in the request",err);
    error.style.display = "block";
    weatherdisplay.style.display = "none";
    weatherdisplay.style.value = "";
  }                     
   
}


