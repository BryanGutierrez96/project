import React, {useState, useEffect} from 'react'
import {getClass} from '../services/classService'
import ClassCard from '../Components/ClassCard'
export default  function Class (){
  const [state, setState] = useState({
    class: [],
    classLength: 0,
  });
  useEffect(() => {
    async function fetchClass() {
      const { data } = await getClass();
      const classes = Object.keys(data).map((key) => data[key]);
  
      setState({ ...state, classes });
    }
    fetchClass();
  }, []);
  console.log(state);
  
  const showClass = () => {
    return state.classes.length > 0 ? (
      state.classes.map ((clas, i) => (
        <ClassCard
          key={i}
          title={clas.title}
          desc={clas.short_description}
        />
      ))
    ) : (
      <h3>Cargando...</h3>
    );
  };
    return (
        <div className="App">
          {showClass()}
        </div>
      );
}






