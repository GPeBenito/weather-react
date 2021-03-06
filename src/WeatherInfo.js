import React from "react";
import FormattedDate from "./FormattedDate";
import "./WeatherInfo.css";
export default function WeatherInfo(props){
    return (
        <div className="Info">
        <div className="Weather">
      
              <h2> {props.data.city} </h2>
              <ul className="Header">
                <li><FormattedDate date= {props.data.date}/></li>
                <li className= "text-capitalize">{props.data.description}</li>
              </ul>
              <div className="row mt-3">
  
              <div className="col-6">
              <div className="clearfix">
    
              <img
                src={props.data.icon}
                alt={props.data.description}
                className="weather-icon float-left"
              />
  
              <div className="float-left">
                <span className="temperature">
                  <p className="temp"> {Math.round(props.data.temperature)}</p>
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
               Humidity: {props.data.humidity} %
            </li>
            <li>
              Wind: {Math.round(props.data.wind)} km/h
            </li>
          </ul>
          </div>
          </div>
           
          </div>
       
      </div>
    );
}