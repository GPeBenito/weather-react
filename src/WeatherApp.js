import React, { useState } from "react";
import axios from "axios";
import "./WeatherApp.css";

import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function WeatherApp(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ loaded: false});

  function showWeather(response) {
   
    setWeather({
      loaded:true,
      city:response.data.name,
      date: new Date(response.data.dt*1000), 
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon
    });
  }
function search(){
  const apiKey = "0e6a69651885d99335f23f200403f8a4";
  const unit = "metric";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(showWeather);
  console.log(apiUrl);

}
  function handleSubmit(event) {
    event.preventDefault();
   search();
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  let form = (
      <div className="SearchForm">
    <form class="search-form mb-3" id="search-form" onSubmit={handleSubmit}>
      <div class="row">
          <div class="col-6">

     
      <input
        type="search"
        placeholder="Search for a city"
        autoFocus="on"
        autoComplete="off"
        id="city-input"
        class="form-control shadow-sm"
        onChange={updateCity}
      />
      </div>
      <div class="col-3">
      <input type="submit" value="Search"
      class="form-control btn btn-primary shadow-sm"
      id="special-button" />
      </div>
    
      </div>
    </form>
    </div> 
  );
  if (weather.loaded) {
    return (
      <div className="WeatherApp">
      {form}
      <WeatherInfo data = {weather}/>
      <WeatherForecast city= {weather.city}/>
      </div>
    );
   
  } else {
   search();
    return "Loading...";
  }
}

