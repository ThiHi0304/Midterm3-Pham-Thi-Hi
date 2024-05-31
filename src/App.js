import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Search from "./components/users/Search";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="container">
          <h1>GitHub Users Data</h1>
          <Switch>
            <Route exact path="/" component={Search} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};
export default App;
