import axios from 'axios'

const URI = "https://workoutsappcol.herokuapp.com/api/v1/users/login";

export async function login(data, props) {
  try {
    const user = await axios.post(URI, data);
    console.log(user.data.token)
    window.localStorage.setItem('token', user.data.token)
    props.history.push('/workouts');
  } catch (error) {
    console.log(error);
  }
}
