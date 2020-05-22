import React, {useState} from "react";
import axios from 'axios'

export default function Login() {
    const [user, setUser] = useState({
        email:"",
        password:""
      });
      const inputChange = (e) => {
        const { id, value } = e.target;
        const newUser = { ...user };
        newUser[id] = value;
        setUser(newUser);
      };
      const clear= () => {
          setUser({
              email:"",
              password:""
          })
    }
  const saveUser = (event) => {
    event.preventDefault();
    axios
      .get("/", {
        user,
      })
      .then(() => {
        alert("Bienvenid@");
        clear()
      })
      .catch((err) => {
        return err;
      });
  };
  return (
    <div className="container text-center">
      <h2 className="mt-5">Login</h2>
      <div className="row justify-content-center mt-5">
        <div className="col-12 col-lg-8 col-md-8 col-sm-8">
          <form onSubmit={saveUser}>
            <div className="form-group">
              <label htmlFor="">Ingresa un usuario</label>
              <input
                type="text"
                id="email"
                required
                onChange={inputChange}
                value={user.email}
                className="form-control"
                placeholder="Usuario"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Ingresa una contraseña</label>
              <input
                type="password"
                id="password"
                required
                onChange={inputChange}
                value={user.password}
                className="form-control"
                placeholder="Contraseña"
              />
            </div>
            <button type="submit" className="btn btn-info">
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
