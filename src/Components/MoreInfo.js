import React from 'react';
export default function MoreInfo(props) {
  return (
    <div className="row justify-content-center mt-5">
      <div className="col-12 col-sm-4 col-md-4 col-lg-4">
        <img src={props.workout.image} className="card-img-top" alt="..." />
        <div className="card-header">
          <div className="card-body">
            <p className="card-text">
              Descripcion Larga{props.workout.long_description}
            </p>
            <p className="card-text">{props.workout.date}</p>
            <p className="card-text">{props.workout.hour}</p>
            <p className="card-text">{props.workout.cancellation_time}</p>
            <p className="card-text">{props.workout.teacher}</p>
            <a href="#" class="btn btn-primary">
              Tomar clase
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
