import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./CurrentWeather.css";

export default function WeatherData() {
    let weatherData = {
      city: "New York",
      temperature: 19,
      date: "Tuesday 10:00",
      description: "Partly Cloudy",
      imgUrl:
        "https://i.pinimg.com/564x/77/0b/80/770b805d5c99c7931366c2e84e88f251.jpg",
      humidity: 80,
      wind: 10
    };
  
    return (
      <div className="CurrentWeather">
        <div className="row">
          <div className="col-9">
            <div className="clearfix weather-temperature">
              <h1> {weatherData.city} </h1>
              <ul className="Header">
                <li>Last updated: {weatherData.date} </li>
                <li>{weatherData.description}</li>
              </ul>
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
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
        </div>
      </div>
    );
  }