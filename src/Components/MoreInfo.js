import React from "react";
export default function MoreInfo(
  long_description,
  date,
  hour,
  cancellation_time,
  teacher
) {
  return (
    <div className="row justify-content-center mt-5">
      <div className="col-12 col-sm-4 col-md-4 col-lg-4">
        <div className="card-header">
          <div className="card-body">
            <p className="card-text">{long_description}</p>
            <p className="card-text">{date}</p>
            <p className="card-text">{hour}</p>
            <p className="card-text">{cancellation_time}</p>
            <p className="card-text">{teacher}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
