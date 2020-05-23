import axios from 'axios'

const URI = "https://workoutsappcol.herokuapp.com/api/v1/workout";
const token = `Bearer ${window.localStorage.getItem('token')}`

export async function createWorkout(workout) {
  try {
    const newWorkout = await axios.post(URI, workout, {headers: {'authorization': token}});
    return newWorkout.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getWorkouts() {
  try {
    const workouts = await axios.get(URI,{headers: {'authorization': token}});
    return workouts.data;
  } catch (error) {
    console.log(error);
  }
}
export async function getWorkout(id) {
  try {
    const workout = await axios.get(`${URI}/${id}`,{headers: {'authorization': token}});
    return workout.data;
  } catch (error) {
    console.log(error);
  }
}
export async function updateWorkout(id, newData) {
  try {
    const workout = await axios.patch(`${URI}/${id}`, newData,{headers: {'authorization': token}});
    return workout.data;
  } catch (error) {
    console.log(error);
  }
}
export async function deleteWorkout(id) {
  try {
    const response = await axios.delete(`${URI}/${id}`,{headers: {'authorization': token}});
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function addWorkoutToUser(userId, workoutId) {
  try {
    const workouts = await axios.post(`${URI}/${userId}`, workoutId, {headers: {'authorization': token}});
    return workouts.data;
  } catch (error) {
    console.log(error);
  }
}
