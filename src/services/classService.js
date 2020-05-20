import axios from 'axios'

const URI = "https://helados-deca8.firebaseio.com/class";

export async function getClass() {
  try {
    const classes = await axios.get(URI);
    return classes.data;
  } catch (error) {
    console.log(error);
  }
}