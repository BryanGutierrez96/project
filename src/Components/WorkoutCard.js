import React from "react";

export default function WorkoutCard(title, short_description) {
  
  return (
    <div className="row justify-content-center mt-5">
      <div className="col-12 col-sm-4 col-md-4 col-lg-4">
        <div className="card-header">
          <img
            src="https://as.com/buenavida/imagenes/2017/05/08/portada/1494254664_276999_1494254852_noticia_normal.jpg"
            className="card-img-top"
          />
          <div className="card-body">
  <h5 className="card-title">{title}</h5>
            <p className="card-text">{short_description}</p>
            <a href="" className="btn btn-primary">
              Mas info:
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

