import React, { useEffect, useState } from "react";
import Axios from "axios";
import WorkoutCard from "../Components/WorkoutCard";
export default function Workout() {
  const [workout, setWorkout] = useState([]);
  useEffect(() => {
    Axios.get("https://helados-deca8.firebaseio.com/workouts.json")
      .then((res) => {
        console.log(res.data);
        const elements = Object.entries(res.data);
        console.log(elements);
        const realData = elements.map((work) => {
          const [id, data] = work;
          return {
            id,
            ...data,
          };
        });
        setWorkout(realData);
        console.log(realData);
      })
      .catch((err) => {
        alert(err);
      });
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 co-md-12 col-lg-12">
          {workout.map((work, i) => (
            <WorkoutCard
              key={i}
              titulo={work.title}
              descripcion_corta={work.short_description}
              hora={work.hour}
              fecha={work.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
}


