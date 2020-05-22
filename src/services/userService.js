import axios from 'axios';

const URI = 'https://workoutsappcol.herokuapp.com/users';
const token = window.localStorage.getItem('token');

export async function createUser(user) {
  try {
    const newUser = await axios.post(URI, user, {
      headers: { authorization: token },
    });
    return newUser.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getUsers() {
  try {
    const users = await axios.get(URI, { headers: { authorization: token } });
    return users.data;
  } catch (error) {
    console.log(error);
  }
}
export async function getAllUsers() {
  try {
    const users = await axios.get(`${URI}/all`, {
      headers: { authorization: token },
    });
    return users.data;
  } catch (error) {
    console.log(error);
  }
}
export async function getUser(id) {
  try {
    const user = await axios.get(`${URI}/${id}`, {
      headers: { authorization: token },
    });
    return user.data;
  } catch (error) {
    console.log(error);
  }
}
export async function updateUser(id, newData) {
  try {
    const user = await axios.patch(`${URI}/${id}`, newData, {
      headers: { authorization: token },
    });
    return user.data;
  } catch (error) {
    console.log(error);
  }
}
export async function deleteUser(id) {
  try {
    const response = await axios.delete(`${URI}/${id}`, {
      headers: { authorization: token },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
