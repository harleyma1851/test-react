import React from "react";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <h1 className="col-6">{props.data.city}</h1>

        <div className="col-6">
          <img src={props.data.iconUrl} alt={props.data.icon}></img>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <ul>
            <li className="current-temp">
              {Math.round(props.data.temperature)}{" "}
              <a href="/" id="celsius-link">
                °C
              </a>
              {" | "}
              <a href="/" id="fahrenheit-link">
                °F
              </a>
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Humidity:
              <span id="humidity">{Math.round(props.data.humidity)}</span>%
            </li>
            <li>
              Wind:<span id="wind"> {Math.round(props.data.wind)}</span> km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
