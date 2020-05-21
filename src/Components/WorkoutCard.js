import React from "react";

export default function WorkoutCard(props) {
  
  return (
    <div className="row justify-content-center mt-5">
      <div className="col-12 col-sm-4 col-md-4 col-lg-4">
        <div className="card-header">
          <img
            src="https://as.com/buenavida/imagenes/2017/05/08/portada/1494254664_276999_1494254852_noticia_normal.jpg"
            className="card-img-top"
          />
          <div className="card-body">
  <h5 className="card-title">{props.titulo}</h5>
            <p className="card-text">{props.descripcion_corta}</p>
            <p className="card-text">{props.hora}</p>
            <p className="card-text">{props.fecha}</p>
            <a href="" className="btn btn-primary">
              Mas info:
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

