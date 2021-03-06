import React, { useState } from "react";
import axios from "axios";
import "./WeatherApp.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function WeatherApp(props) {
  const [city, setCity] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png `
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const apiKey = "0e6a69651885d99335f23f200403f8a4";
    const unit = "metric";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(showWeather);
    console.log(apiUrl);
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
  if (loaded) {
    return (
      <div className="Weather">
        <div>
        {form}
              <h2> New York </h2>
              <ul className="Header">
                <li>Last updated: TUESDAY 10:00AM </li>
                <li>Partly Cloudy</li>
              </ul>
              <div className="row">
  
              <div className="col-6">
              <div className="clearfix">
    
              <img
                src="https://i.pinimg.com/564x/77/0b/80/770b805d5c99c7931366c2e84e88f251.jpg"
                alt="partly cloudy"
                className="weather-icon float-left"
              />
  
              <div className="float-left">
                <span className="temperature">
                  <p className="temp"> 19 </p>
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
               Humidity: 10 %
            </li>
            <li>
              Wind: 5 km/h
            </li>
          </ul>
          </div>
          </div>
           
          </div>
       
      
      
     
    
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}ºC </li>
          <li className= "text-capitalize"> Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li> Wind: {weather.wind}km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
