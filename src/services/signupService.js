import axios from 'axios'

const URI = "https://workoutsappcol.herokuapp.com/signup";

export async function createUser(user) {
  try {
    const newUser = await axios.post(URI, user);
    return newUser.data;
  } catch (error) {
    console.log(error);
  }
}
