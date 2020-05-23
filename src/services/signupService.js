import axios from 'axios'

const URI = "https://workoutsappcol.herokuapp.com/api/v1/users/signup";

export async function createUser(user, {props}) {
  try {
    const newUser = await axios.post(URI, user);
    props.history.push('/login');
    return newUser.data;
  } catch (error) {
    console.log(error);
  }
}
