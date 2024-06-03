import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Search from "./components/users/Search";
import Navbar from "./components/layout/Navbar";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import User from "./components/users/User";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="container">
          <h1>GitHub Users Data</h1>
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/about" component={About} />
            {/* Add this line to specify the routing*/}
            <Route exact path="/user/:id" component={User} />
            <Route path="/*" component={NotFound}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};
export default App;
