import React from 'react';
import { Link } from 'react-router-dom';

export default function WorkoutCard(props) {
  return (
    <Link to={`/workout/${props.id}`}>
      <div className="row justify-content-center mt-5">
        <div className="col-12 col-sm-4 col-md-4 col-lg-4">
          <div className="card-header">
            <img src={props.img} className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">{props.titulo}</h5>
              <p className="card-text">{props.descripcion_corta}</p>
              <p className="card-text">Hora: {props.hora}</p>
              <p className="card-text">Feha: {props.fecha}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
