import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  //const [city, setCity] = useState(props.city);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      city: response.data.name,
    });
  }

  // function handleSubmit(event) {
  //  event.preventDefault();
  //  alert(city);
  // }
  // function handleCityChange(event) {
  //   setCity(event.target.value);
  // }
  // function search() {
  //  const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";

  //  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  //  axios.get(apiUrl).then(handleResponse);
  //}

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Search for a city..."
                autoFocus="on"
                id="city-input"
                className="form-control shadow-sm"
              />
            </div>

            <div className="col-3">
              <input
                type="submit"
                value="Search 🔎"
                className="form-control btn btn-primary w-100"
              />
            </div>
          </div>
        </form>{" "}
        <div className="row">
          <div className="col-6">
            <h1 id="city">Lisbon</h1>
            <ul>
              <li id="current-temp">{Math.round(weatherData.temperature)}</li>
              <li className="text-capitalize">{weatherData.description}</li>
            </ul>
          </div>
          <div className="col-6">
            <img src={weatherData.iconUrl} alt={weatherData.icon}></img>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <span className="units">
              {" "}
              <a href="/" id="celsius-link">
                °C
              </a>
              {" | "}
              <a href="/" id="fahrenheit-link">
                °F
              </a>
            </span>
          </div>
          <div className="col-6">
            <ul>
              <li>
                Humidity:
                <span id="humidity">{Math.round(weatherData.humidity)}</span>%
              </li>
              <li>
                Wind:<span id="wind"> {Math.round(weatherData.wind)}</span> km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let city = "lisbon";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
