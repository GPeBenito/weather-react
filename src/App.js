import 'bootstrap/dist/css/bootstrap.min.css';
import"./styles.css";
import WeatherApp from "./WeatherApp";
import './App.css';
import CurrentWeather from "./CurrentWeather";
import CurrentFeatures from "./CurrentFeatures";

function App() {
  return (
    <div className="App">
     <h1> Hello World! </h1>
     <WeatherApp city="New York"/>
     <CurrentWeather/>
     <CurrentFeatures/>
    </div>
  );
}

export default App;
