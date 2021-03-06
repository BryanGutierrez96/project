import React, { useState } from "react";
import axios from "axios";
export default function CreateWorkout(props) {
  const [workout, setWorkout] = useState({
    title: "",
    short_description: "",
    long_description: "",
    date: "",
    hour: "",
    cancellation_time: "",
    teacher: "",
    image: "",
  });
  const inputChange = (e) => {
    const { id, value } = e.target;
    const newWorkout = { ...workout };
    newWorkout[id] = value;
    setWorkout(newWorkout);
  };
  const saveWorkout = (event) => {
    event.preventDefault();
    axios
      .post("https://helados-deca8.firebaseio.com/workouts.json", {
        workout,
      })
      .then(() => {
        alert("Clase creada correctamente");
        props.history.push("/");
      })
      .catch((err) => {
        return err;
      });
  };
  return (
    <div className="container text-center">
      <h2 className="mt-5" >Crear nueva clase</h2>
      <div className="row justify-content-center mt-5">
        <div className="col-12 col-lg-8 col-md-8 col-sm-8">
          <form onSubmit={saveWorkout}>
            <div className="form-group">
              <label htmlFor="">Titulo</label>
              <input
                type="text"
                id="title"
                required
                onChange={inputChange}
                className="form-control"
                value={workout.title}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Descripcion Corta:</label>
              <textarea
                id="short_description"
                required
                onChange={inputChange}
                className="form-control"
                value={workout.shortDescription}
                cols="30"
                rows="2"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Descripcion Larga:</label>
              <textarea
                id="long_description"
                required
                onChange={inputChange}
                className="form-control"
                value={workout.long_description}
                cols="30"
                rows="10"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Fecha:</label>
              <input
                type="date"
                onChange={inputChange}
                className="form-control"
                id="date"
                value={workout.date}
                placeholder="dd/mm/aa"
                required
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="">Hora:</label>
              <input
                type="text"
                onChange={inputChange}
                className="form-control"
                id="hour"
                value={workout.hour}
                placeholder="Hora"
                required
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="">Tiempo de cancelacion: </label>
              <input
                type="text"
                onChange={inputChange}
                className="form-control"
                id="cancellation_time"
                value={workout.cancellation_time}
                placeholder="Tiempo de cancelacion"
                required
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="">Profesor:</label>
              <input
                type="text"
                onChange={inputChange}
                className="form-control"
                id="teacher"
                value={workout.teacher}
                placeholder="Profesor"
                required
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="">Foto:</label>
              <input
                type="text"
                onChange={inputChange}
                className="form-control"
                id="image"
                value={workout.image}
                placeholder="Foto"
                required
              ></input>
            </div>
            <button type="submit" className="btn btn-info">
              Guardar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
