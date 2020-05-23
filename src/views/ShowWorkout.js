import React, { useEffect, useState } from 'react';
import WorkoutCard from '../Components/WorkoutCard';
import { getWorkouts } from '../services/workoutService';
export default function ShowWorkout() {
  const [workouts, setWorkouts] = useState([]);
  useEffect(() => {
    const fetchWorkouts = async () => {
      const newWorkouts = await getWorkouts();
      setWorkouts(newWorkouts);
      console.log(workouts);
    };
    fetchWorkouts();
  }, []);

  const showWorkouts = () => {
    if (workouts.length > 0) {
      return workouts.map((work, i) => (
        <WorkoutCard
          id={work._id}
          key={i}
          titulo={work.title}
          descripcion_corta={work.short_description}
          hora={work.hour}
          fecha={work.date}
          img={work.image}
        />
      ));
    } else {
      return <h3>Cargando...</h3>;
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 co-md-12 col-lg-12">
          {showWorkouts()}
        </div>
      </div>
    </div>
  );
}
