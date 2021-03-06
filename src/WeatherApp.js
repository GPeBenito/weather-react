import React, { useState } from "react";
import axios from "axios";
import "./WeatherApp.css";
import FormattedDate from "./FormattedDate";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function WeatherApp(props) {
  const [city, setCity] = useState(null);
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
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png `
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
   
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
      <div class="col-3">
          <button class="btn btn-success w-100" id="current-location-button">
              Current
          </button>
      </div>
      </div>
    </form>
    </div> 
  );
  if (weather.loaded) {
    return (
      <div className="Weather">
        <div>
        {form}
              <h2> {weather.city} </h2>
              <ul className="Header">
                <li><FormattedDate date= {weather.date}/></li>
                <li className= "text-capitalize">{weather.description}</li>
              </ul>
              <div className="row mt-3">
  
              <div className="col-6">
              <div className="clearfix">
    
              <img
                src={weather.icon}
                alt={weather.description}
                className="weather-icon float-left"
              />
  
              <div className="float-left">
                <span className="temperature">
                  <p className="temp"> {Math.round(weather.temperature)}</p>
                </span>
                <span className="units">
                  <a
                    href="https://www.google.com/search?q=what+is+celsius&rlz=1C5CHFA_enUS925US925&oq=what+is+celsius&aqs=chrome..69i57j0l5j0i395l4.2485j1j7&sourceid=chrome&ie=UTF-8"
                    class="active"
                  >
                    ºC
                  </a>
                  |
                  <a href="https://www.google.com/search?rlz=1C5CHFA_enUS925US925&sxsrf=ALeKk00kKnxxG69VpivFhAoCK25Zj3Sofw%3A1610790805093&ei=lbcCYLKeBczlkwXghq1Q&q=what+is+fahrenheit+based+on&oq=what+is+fa&gs_lcp=CgZwc3ktYWIQAxgAMgcIABDJAxBDMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAOgQIABBHOgQIIxAnOgQILhBDOgQIABBDUK6VAVj1pQFg0cMBaABwBHgAgAFWiAGpBZIBAjEwmAEAoAEBqgEHZ3dzLXdpesgBCMABAQ&sclient=psy-ab">
                    ºF
                  </a>
                </span>
                </div>
              </div>
              </div>
              <div className= "col-6">
              <ul className="float-right">
            <li>
              {" "}
               Humidity: {weather.humidity} %
            </li>
            <li>
              Wind: {Math.round(weather.wind)} km/h
            </li>
          </ul>
          </div>
          </div>
           
          </div>
       
      </div>
    );
  } else {
    const apiKey = "0e6a69651885d99335f23f200403f8a4";
    const unit = "metric";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(showWeather);
    console.log(apiUrl);
    return form;
  }
}

