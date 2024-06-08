import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./components/layout/Home";
import Navbar from "./components/layout/Navbar";
const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? "black" : "white";
    document.body.style.color = isDarkMode ? "white" : "black";
  }, [isDarkMode]);
  
  return (
    <div className="App">
      <Router>
        <Navbar />
        <button
          onClick={handleTheme}
          style={{
            borderRadius: "20px",
            height: "40px",
            width: "120px",
            marginLeft: "90%",
          }}
        >
          {isDarkMode ? "Light" : "Dark"}
        </button>
        <Home />
      </Router>
    </div>
  );
};

export default App;
