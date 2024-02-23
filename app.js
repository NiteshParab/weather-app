let para=document.querySelector(".data");
let button=document.querySelector(".btn");

function displayData(temperature,pressure){
    para.innerText=`temperature=${temperature} and pressure=${pressure}`;
}

async function getWeatherData(latitude,longitude){
    let url="https://api.weatherapi.com/v1/current.json?key=5300d1ee12314ac1bda82407242302&q=bulk"

    let newUrl=`https://api.weatherapi.com/v1/current.json?key=5300d1ee12314ac1bda82407242302&q=${latitude},${longitude}`;

    let response= await fetch(newUrl);
    //console.log(response);
    let data= await response.json();
    //console.log(data)
    let temperature=data.current.temp_c;
    //console.log(temperature);
    let pressure=data.current.pressure_mb;
    //console.log(pressure)

    displayData(temperature,pressure);
}

async function getLocation(){
    navigator.geolocation.getCurrentPosition((position)=>{
        let latitude=position.coords.latitude;
        let longitude=position.coords.longitude;
        //console.log(latitude);
        //console.log(longitude);
        getWeatherData(latitude,longitude);
    }) 
}

button.addEventListener("click",()=>{
    getLocation();
})

