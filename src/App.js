import 'bootstrap/dist/css/bootstrap.min.css';
import"./styles.css";
import WeatherApp from "./WeatherApp";
import './App.css';
import CurrentWeather from "./CurrentWeather";
import CurrentFeatures from "./CurrentFeatures";

function App() {
  return (
    <div className="App">
     <h1> React Weather App </h1>
     <WeatherApp city="New York"/>
     <CurrentWeather/>
     <CurrentFeatures/>
  
     <p> Open Source Code by <a href="https://github.com/GPeBenito/weather-react" target="_blank" rel="noreferrer"> G. Pe Benito </a> </p>
     </div>
     );
}

export default App;
