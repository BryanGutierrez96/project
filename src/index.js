import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./views/Login";
import ShowWorkout from "./views/ShowWorkout"
import WorkoutInfo from "./views/WorkoutInfo"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Login" exact component={Login} />
        <Route path="/workouts" exact component={ShowWorkout} />
        <Route path="/workout/:id" exact component={WorkoutInfo} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
