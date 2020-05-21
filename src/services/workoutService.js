import axios from 'axios'

const URI = "https://helados-deca8.firebaseio.com/class.json";

export async function getWorkout() {
  try {
    const workouts = await axios.get(URI);
    return workouts.data;
  } catch (error) {
    console.log(error);
  }
}