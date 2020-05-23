import React, { useState } from 'react';
import { createUser } from '../services/signupService';
export default function CreateUser(props) {
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    password: '',
    born_date: '',
    profile_img: '',
  });
  const inputChange = (e) => {
    const { id, value } = e.target;
    const newUser = { ...user };
    newUser[id] = value;
    setUser(newUser);
  };
  const submit = () => createUser(user, props);

  return (
    <div className="container text-center">
      <h2 className="mt-5">Crear Usuario Nuevo</h2>
      <div className="row justify-content-center mt-5">
        <div className="col-12 col-lg-8 col-md-8 col-sm-8">
          <form>
            <div className="form-group">
              <label htmlFor="">Nombres:</label>
              <input
                type="text"
                id="first_name"
                required
                onChange={inputChange}
                className="form-control"
                value={user.first_name}
                placeholder="Nombres"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Apellidos:</label>
              <input
                type="text"
                id="last_name"
                required
                onChange={inputChange}
                className="form-control"
                value={user.last_name}
                placeholder="Apellidos"
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
                value={user.email}
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Celular:</label>
              <input
                type="number"
                onChange={inputChange}
                className="form-control"
                id="phone_number"
                value={user.phone_number}
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
                value={user.password}
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
                value={user.born_date}
                placeholder="Fecha de nacimiento"
                required
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="">Agregar foto:</label>
              <input
                type="text"
                onChange={inputChange}
                className="form-control"
                id="profile_img"
                value={user.profile_img}
                placeholder="Foto"
              ></input>
            </div>
            <button type="button" onClick={submit} className="btn btn-info">
              Guardar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
