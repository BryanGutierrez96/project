import React, { useState } from "react";
import axios from "axios";
export default function CreateWorkout(props) {
  const [state, setState] = useState({
    title:"",
    short_description: "",
    long_description: "",
    date: "",
    hour: "",
    cancellation_time: "",
    is_active: true,
    teacher: "",
    photo: "",
  });
  const inputChange = (e) => {
    const { id, value } = e.target;
    const newState = { ...state };
    newState[id] = value;
    setState(newState);
  };
  const clear = () => {
    setState.is_active("true");
    setState("");
  };
  const saveWorkout = (event) => {
    event.preventDefault();
    axios
      .post("https://helados-deca8.firebaseio.com/class.json", {
        state,
      })
      .then(() => {
        alert("Clase creada correctamente");
        clear();
        props.history.push("/");
      })
      .catch((err) => {
        return err;
      });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-8 col-md-8 col-sm-8">
          <form onSubmit={saveWorkout}>
          <div className="form-group">
              <label htmlFor="">Titulo</label>
              <textarea
                id="title"
                required
                onChange={inputChange}
                className="form-control"
                value={state.title}
                cols="30"
                rows="2"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Descripcion Corta:</label>
              <textarea
                id="short_description"
                required
                onChange={inputChange}
                className="form-control"
                value={state.shortDescription}
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
                value={state.long_description}
                cols="30"
                rows="10"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Fecha:</label>
              <input
                type="text"
                onChange={inputChange}
                className="form-control"
                id="date"
                value={state.date}
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
                value={state.hour}
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
                value={state.cancellation_time}
                placeholder="Tiempo de cancelacion"
                required
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="">¿ Está Activo ?</label>
              <select
                id="is_active"
                required
                value={state.is_active}
                onChange={inputChange}
                className="form-control"
              >
                <option value={true}>Activo</option>
                <option value={false}>Inactivo</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="">Profesor:</label>
              <input
                type="text"
                onChange={inputChange}
                className="form-control"
                id="teacher"
                value={state.teacher}
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
                id="photo"
                value={state.photo}
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


