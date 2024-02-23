async function getWeatherData(){
    // base_URL=http://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=bulk

    // let url="https://api.weatherapi.com/v1/current.json?key=5300d1ee12314ac1bda82407242302&q=Maharashtra";

    let url="https://api.weatherapi.com/v1/current.json?key=5300d1ee12314ac1bda82407242302&q=18.5204303,73.8567437/days=5"

    let response= await fetch(url);
    console.log(response);
    let data= await response.json();
    console.log(data)
    let temperature=data.current.temp_c;
    console.log(temperature);
    let pressure=data.current.pressure_mb;
    console.log(pressure)
}

getWeatherData();