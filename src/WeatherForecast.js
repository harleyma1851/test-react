import React, { useState } from "react";
import axios from "axios";
//import WeatherIcon from "./WeatherIcon";
export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">{forecast[0].dt}</div>

            <div className="WeatherForecast-temperature">
              <span className="WeatherForecast-temperature-max">
                {Math.round(forecast[0].temp.max)}°
              </span>{" "}
              |{" "}
              <span className="WeatherForecast-temperature-min">
                {Math.round(forecast[0].temp.min)}°
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
