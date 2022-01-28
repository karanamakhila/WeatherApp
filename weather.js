const weatherApi = {
   //key:"001b0f58045147663b1ea518d34d88b4",
   key:"bab281d79e5f1e9755a68d754cc313e7" ,
   baseUrl:"https://api.openweathermap.org/data/2.5/weather"
}

const searchInputBox = document.getElementById('input-box');

searchInputBox.addEventListener('keypress',(event) => {
    
   if(event.keyCode == 13){
       console.log(searchInputBox.value);
       getWeatherReport(searchInputBox.value);
    }

});

function getWeatherReport(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}

function showWeatherReport(weather){
    console.log(weather);

    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C(min)/${Math.ceil(weather.main.temp_max)}&deg;C(max)`;

    let weatherType = document.getElementById('weather');
    weatherType.innerText =`${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);

    if(weatherType.textContent == 'Clear'){
        document.body.style.backgroundImage = "url('images/clear.jpg')";
    }
    else if(weatherType.textContent == 'Clouds'){
        document.body.style.backgroundImage = "url('images/clouds.jpg')";
    }
    else if(weatherType.textContent == 'Rain'){
        document.body.style.backgroundImage = "url('images/rain.jpg')";
    }
    else if(weatherType.textContent == 'Haze'){
        document.body.style.backgroundImage="url('images/haze.jpg')";
    }
    else if(weatherType.textContent == 'Snow'){
        document.body.style.backgroundImage="url('images/snow.jpg')";
    }
    else if(weatherType.textContent == 'Thunderstorm'){
        document.body.style.backgroundImage="url('images/thunderstorm.jpg')";
    }
    else if(weatherType.textContent == 'Smoke'){
        document.body.style.backgroundImage="url('images/smoke.jpg')";
    }

}
function dateManage(dateArg){
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let months=["January","February","March","April","June","July","August","September","October","November","December"];
    let year=dateArg.getFullYear();
    let month=months[dateArg.getMonth()];
    let date=dateArg.getDate();
    let day=days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;
}




























/*let request=new XMLHttpRequest
request.open('GET','https://reqres.in/api/users? page=2',true);
request.onload=function(){
    if(request.status>=200 && request.status<400){
        console.log("success!!!");
        let data=JSON.parse(request.responseText);
        console.log(data);
    }
    else{
        console.log("could not connect to server")
    }
}

request.onerror=function(){
    console.log("error!!!")
}
request.send();*/