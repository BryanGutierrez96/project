import React from "react";
import "./App.css";
import Workout from "./views/ShowWorkout";
function Home() {
  return (
    <div className="App">
      <Workout/>
      <div className="container mt-5 pt-5">
        <div className="row justify-content-center mb-5">
          <div className="col-4">
            <a
              href="/views/CreateWorkout"
              className="btn btn-lg bg-dark text-white"
            >
              Crear clase
            </a>
          </div>
        </div>
        <div className="container mt-5 pt-5">
          <div className="row justify-content-center mb-5">
            <div className="col-4">
              <a
                href="/views/CreateTeacher"
                className="btn btn-lg bg-dark text-white"
              >
                Crear profesor
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
