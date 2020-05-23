import React from "react";
import "./App.css";
import CreateUser from './views/CreateUser'
function Home(props) {
  return (
    <div className="App">
      <CreateUser props={props}/>
    </div>
  );
}

export default Home;
