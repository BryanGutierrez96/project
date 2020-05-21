import React, { useState } from "react";
import axios from "axios";
export default function CreateTeacher(props) {
  const [teacher, setTeacher] = useState({
    name: "",
    firstname: "",
    email: "",
    cel: "",
    password: "",
    birthdate: "",
    is_active: true,
    is_member:true,
    photo: "",
  });
  const inputChange = (e) => {
    const { id, value } = e.target;
    const newTeacher = { ...teacher };
    newTeacher[id] = value;
    setTeacher(newTeacher);
  };
  const clear = () => {
    setTeacher.name("");
    setTeacher.firstname("");
    setTeacher.email("");
    setTeacher.cel("");
    setTeacher.password("");
    setTeacher.birthdate("");
    setTeacher.photo("");
    setTeacher.is_active(true);
    setTeacher.is_member(true);
  };
  const saveTeacher = (event) => {
    event.preventDefault();
    axios
      .post("https://helados-deca8.firebaseio.com/teacher.json", {
        teacher,
      })
      .then(() => {
        alert("Hola Profe");
        clear();
        props.history.push("/");
      })
      .catch((err) => {
        return err;
      });
  };
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-12 col-lg-8 col-md-8 col-sm-8">
          <form onSubmit={saveTeacher}>
            <div className="form-group">
              <label htmlFor="">Nombre:</label>
              <input
              type="text"
                id="name"
                required
                onChange={inputChange}
                className="form-control"
                value={teacher.name}
                placeholder="Nombre"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Apellido:</label>
              <input
              type="text"
                id="firstname"
                required
                onChange={inputChange}
                className="form-control"
                value={teacher.firstname}
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
                id="birthdate"
                value={teacher.birthdate}
                placeholder="Fecha de nacimiento"
                required
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="">¿ Está Activo ?</label>
              <select
                id="is_active"
                required
                value={teacher.is_active}
                onChange={inputChange}
                className="form-control"
              >
                <option value={true}>Activo</option>
                <option value={false}>Inactivo</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="">¿ Eres miembro ?</label>
              <select
                id="is_member"
                required
                value={teacher.is_member}
                onChange={inputChange}
                className="form-control"
              >
                <option value={true}>Soy miembro</option>
                <option value={false}>No soy miembro</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="">Anexar foto:</label>
              <input
                type="url"
                onChange={inputChange}
                className="form-control"
                id="photo"
                value={teacher.photo}
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