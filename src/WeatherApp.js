import React from "react";
import axios from "axios";

export default function WeatherApp(props){
    function handleResponse (response) {
        alert(`The weather in ${response.data.name} is ${response.data.main.temp} ºC`);
    }

    let apiKey= "0e6a69651885d99335f23f200403f8a4";
    let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return(
    <div className="Weather">
        <h2>Hello from Weather</h2>
    </div>
    );
}