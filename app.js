let BASE_url="https://api.weatherapi.com/v1/current.json?key=5300d1ee12314ac1bda82407242302&q=bulk";

let inputbox=document.querySelector(".inputbox");
let search=document.querySelector(".search");
let temperature=document.querySelector(".temperature");
let inputlocation=document.querySelector(".location");
let humidity=document.querySelector(".humidity");
let windSpeed=document.querySelector(".windspeed");
let time=document.querySelector(".time");

async function getWeatherData(newUrl){
    let response= await fetch(newUrl);
    // console.log(response);
    let data= await response.json();
    // console.log(data);  

    let temper=data.current.temp_c;
    // console.log(temper);
    temperature.innerText=`${temper}°c`;

    let humi=data.current.humidity;
    // console.log(humi);
    humidity.innerText=`${humi}%`;

    let wind=data.current.wind_kph;
    // console.log(wind);
    windSpeed.innerText=`${wind} km/h`;

    let currTime=data.location.localtime;
    // console.log(currTime);
    time.innerText=currTime;
    
}

async function getLocation(){
    navigator.geolocation.getCurrentPosition((position)=>{
        let latitude=position.coords.latitude;
        let longitude=position.coords.longitude;
        //console.log(latitude);
        //console.log(longitude);
        let newUrl=`https://api.weatherapi.com/v1/current.json?key=5300d1ee12314ac1bda82407242302&q=${latitude},${longitude}`;

        getWeatherData(newUrl);
    }) 
}

window.addEventListener("load",()=>{
    getLocation();
});

search.addEventListener("click",()=>{
    if(inputbox.value==""){
        getLocation();
        inputlocation.innerText=`Current Location`;
    }
    else{
        let newlocation=inputbox.value;
        let newUrl=`https://api.weatherapi.com/v1/current.json?key=5300d1ee12314ac1bda82407242302&q=${newlocation}`;
        inputlocation.innerText=newlocation;
        getWeatherData(newUrl);
    }
})



