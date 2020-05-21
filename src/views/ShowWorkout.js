import React, {useState, useEffect} from 'react'
import {getWorkout} from '../services/workoutService'
import WorkoutCard from '../Components/WorkoutCard'
export default  function Workout (){
  const [state, setState] = useState({
    workouts: [],
    workoutLength: 0,
  });
  useEffect(() => {
    async function fetchWorkout() {
      const result = await getWorkout();
      console.log(result)
      // const workouts = Object.keys(data).map((key) => data[key]);
  
      // setState({ ...state, workouts });
    }
    fetchWorkout();
  }, []);
  // console.log(state);
  
  const showWorkout = () => {
    return state.workouts.length > 0 ? (
      state.workouts.map((workout, i) => (
        <WorkoutCard
          key={i}
          title={workout.title}
          desc={workout.short_description}
        />
      ))
    ) : (
      <h3>Cargando...</h3>
    );
  };
    return (
        <div className="App">
          {showWorkout()}
        </div>
      );
}






