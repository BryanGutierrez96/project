import axios from 'axios'

const URI = "https://workoutsappcol.herokuapp.com/users";

export async function createUser(user) {
  const token = window.localStorage.getItem('token')
  try {
    const newUser = await axios.post(URI, user, {headers: {'authorization': token}});
    return newUser.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getUsers() {
  try {
    const users = await axios.get(URI);
    return users.data;
  } catch (error) {
    console.log(error);
  }
}
export async function getAllUsers() {
  try {
    const users = await axios.get(`${URI}/all`);
    return users.data;
  } catch (error) {
    console.log(error);
  }
}
export async function getUser(id) {
  try {
    const user = await axios.get(`${URI}/${id}`);
    return user.data;
  } catch (error) {
    console.log(error);
  }
}
export async function updateUser(id, newData) {
  try {
    const user = await axios.post(`${URI}/${id}`, newData);
    return user.data;
  } catch (error) {
    console.log(error);
  }
}
export async function deleteUser(id) {
  try {
    const response = await axios.post(`${URI}/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}