import React from "react";
import FormattedDate from "./FormattedDate";
import "./WeatherInfo.css";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
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
                  <div className="float-left">
    <WeatherIcon code={props.data.icon} />
              
  </div>
              <div className="float-left">
              
                <WeatherTemperature celsius={props.data.temperature}/>
    
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