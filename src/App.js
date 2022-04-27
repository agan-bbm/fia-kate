import React from "react";
import Homepage from "./components/Pages/Homepage";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { About } from "./components/Shared/Pages/About";
console.log(
  "%c Developed by: Black Bird Marketing https://blackbird.marketing",
  "padding:9px 5px; background:black; line-height:25px;color: white"
);

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
