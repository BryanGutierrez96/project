import React, { useState } from "react";
import axios from "axios";
export default function CreateTeacher(props) {
  const [teacher, setTeacher] = useState({
    first_name: "",
    last_name: "",
    email: "",
    cel: "",
    password: "",
    born_date: "",
    image: "",
  });
  const inputChange = (e) => {
    const { id, value } = e.target;
    const newTeacher = { ...teacher };
    newTeacher[id] = value;
    setTeacher(newTeacher);
  };
  const saveTeacher = (event) => {
    event.preventDefault();
    axios
      .post("https://helados-deca8.firebaseio.com/teachers.json", {
        teacher,
      })
      .then(() => {
        alert("Hola Profe");
        props.history.push("/");
      })
      .catch((err) => {
        return err;
      });
  };
  return (
    <div className="container text-center">
            <h2 className="mt-5">Crear Profesor</h2>
      <div className="row justify-content-center mt-5">
        <div className="col-12 col-lg-8 col-md-8 col-sm-8">
          <form onSubmit={saveTeacher}>
            <div className="form-group">
              <label htmlFor="">Nombre:</label>
              <input
                type="text"
                id="first_name"
                required
                onChange={inputChange}
                className="form-control"
                value={teacher.first_name}
                placeholder="Nombre"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Apellido:</label>
              <input
                type="text"
                id="last_name"
                required
                onChange={inputChange}
                className="form-control"
                value={teacher.last_name}
                placeholder="Apellido"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Correo:</label>
              <input
                type="email"
                id="email"
                required
                onChange={inputChange}
                className="form-control"
                value={teacher.email}
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Celular:</label>
              <input
                type="text"
                onChange={inputChange}
                className="form-control"
                id="cel"
                value={teacher.cel}
                placeholder="celular"
                required
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="">Contraseña</label>
              <input
                type="password"
                onChange={inputChange}
                className="form-control"
                id="password"
                value={teacher.password}
                placeholder="Contraseña"
                required
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="">Fecha de nacimiento: </label>
              <input
                type="date"
                onChange={inputChange}
                className="form-control"
                id="born_date"
                value={teacher.born_date}
                placeholder="Fecha de nacimiento"
                required
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="">Anexar foto:</label>
              <input
                type="text"
                onChange={inputChange}
                className="form-control"
                id="image"
                value={teacher.image}
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

// nombre
// apellido
// correo
// celular
// contraseña
// fecha de nacimiento
// is-active
// is-member
// foto

//Faltan estas tres
// role
// mi-lista
// clases-tomadas
// clases-membresia
