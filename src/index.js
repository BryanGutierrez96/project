import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import CreateWorkout from "./views/CreateWorkout";
import CreateTeacher from "./views/CreateTeacher";
import CreateUser from "./views/CreateUser"
import MoreInfo from "./Components/MoreInfo"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/views/CreateWorkout" exact component={CreateWorkout} />
        <Route path="/views/CreateTeacher" exact component={CreateTeacher}/>
        <Route path="/views/CreateUser" exact component={CreateUser}/>
        <Route path="/Components/MoreInfo" exact component={MoreInfo}/>


      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
