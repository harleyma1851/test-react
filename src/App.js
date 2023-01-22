import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lisbon" />

        <footer>
          {" "}
          This project was coded by Michelle Harley, and is{" "}
          <a href="https://github.com/harleyma1851/react-week4-weather-app">
            open-sourced on GitHub
          </a>
          , and{" "}
          <a href="https://www.shecodes.io/learn/workshops/991/apis/weather">
            hosted on Netlify.
          </a>
        </footer>
      </div>
    </div>
  );
}
