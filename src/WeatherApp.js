import React, { useState } from "react";
import axios from "axios";

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
        autofocus="on"
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
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}ºC </li>
          <li> Description: {weather.description}</li>
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
