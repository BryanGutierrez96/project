import axios from 'axios'

const URI = "https://workoutsappcol.herokuapp.com/login";

export async function login(data) {
  try {
    const user = await axios.post(URI, data);
    window.localStorage.setItem('token', user.token)
  } catch (error) {
    console.log(error);
  }
}
