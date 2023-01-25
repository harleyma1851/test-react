import React from "react";
import { createRoot } from "react-dom/client";
import Weather from "./Weather";

import "./App.css";
function App() {
  return (
    <div className="App">
      <Weather defaultCity="london" />
    </div>
  );
}
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
