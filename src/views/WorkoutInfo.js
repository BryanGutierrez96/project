import React, { useState, useEffect } from 'react';
import { getWorkout } from '../services/workoutService';
import MoreInfo from '../Components/MoreInfo';

function WorkoutInfo(props) {
  const [workout, setWorkout] = useState([]);

  useEffect(() => {
    const fetchWorkout = async () => {
      const { id } = props.match.params;
      const workout = await getWorkout(id);
      setWorkout(workout);
    };
    fetchWorkout();
  }, []);

  const showInfo = () => {
    if (workout) {
      return <MoreInfo workout={workout} />;
    } else {
      return <h3>Cargandoo...</h3>;
    }
  };

  return showInfo();
}

export default WorkoutInfo;
