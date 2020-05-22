import axios from 'axios'

const URI = "https://workoutsappcol.herokuapp.com/workout";

export async function createWorkout(workout) {
  const token = window.localStorage.getItem('token')
  try {
    const newWorkout = await axios.post(URI, workout, {headers: {'authorization': token}});
    return newWorkout.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getWorkouts() {
  try {
    const workouts = await axios.get(URI);
    return workouts.data;
  } catch (error) {
    console.log(error);
  }
}