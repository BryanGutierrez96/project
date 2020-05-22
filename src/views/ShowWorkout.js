import React, { useEffect, useState } from "react";
import Axios from "axios";
import WorkoutCard from "../Components/WorkoutCard";
export default function Workout() {
  const [workout, setWorkout] = useState([]);
  useEffect(() => {
    Axios.get("https://helados-deca8.firebaseio.com/workouts.json")
      .then((res) => {
        console.log(res.data);
        const elements = Object.entries(res.data);
        console.log(elements);
        const realData = elements.map((work) => {
          const [id, data] = work;
          return {
            id,
            ...data,
          };
        });
        setWorkout(realData);
        console.log(realData);
      })
      .catch((err) => {
        alert(err);
      });
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 co-md-12 col-lg-12">
          {workout.map((work, i) => (
            <WorkoutCard
              key={i}
              titulo={work.title}
              descripcion_corta={work.short_description}
              hora={work.hour}
              fecha={work.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// import React, { useEffect } from "react";
// import axios from "axios";
// import WorkoutCard from "../Components/WorkoutCard";
//  export default function workout() {

//   useEffect(() => {
//     axios
//       .get("https://helados-deca8.firebaseio.com/class.json")
//       .then((response) => {
//         console.log(response.data);
//         const elements = Object.entries(response.data);
//         const realData = elements.map((workout) => {
//           const [id, data] = workout;
//           return {
//             id,
//             ...data,
//           };
//         });
//       })
//       .catch((error) => {
//         alert(error);
//       });
//   }, []);
//   return (
//     <div className="App">
//       <div className="container mt-5 pt-5">
//         <div className="row justify-content-center">
//           <div className="col-12 col-sm-4 col-md-4 col-lg-4">
//             <h4>Importantes</h4>
//             {todosAlta.map((todo) => {
//               return (
//                 <CardTodo
//                   nombre={todo.user}
//                   todo={todo.todo}
//                   prioridad={todo.prioridad}
//                   edit={() => {
//                     setCurrentTodo(todo);
//                     setIsOpen(true);
//                   }}
//                   delete={() => {
//                     setCurrentTodo(todo);
//                     setIsOpenDelete(true);
//                   }}
//                 />
//               );
//             })}
//           </div>
//           <div className="col-12 col-sm-4 col-md-4 col-lg-4">
//             <h4>No pasa nada</h4>
//             {todosMedia.map((todo) => {
//               return (
//                 <CardTodo
//                   nombre={todo.user}
//                   todo={todo.todo}
//                   prioridad={todo.prioridad}
//                   edit={() => {
//                     setCurrentTodo(todo);
//                     setIsOpen(true);
//                   }}
//                   delete={() => {
//                     setCurrentTodo(todo);
//                     setIsOpenDelete(true);
//                   }}
//                 />
//               );
//             })}
//           </div>
//           <div className="col-12 col-sm-4 col-md-4 col-lg-4">
//             <h4>Pueden esperar</h4>
//             {todosBaja.map((todo) => {
//               return (
//                 <CardTodo
//                   nombre={todo.user}
//                   todo={todo.todo}
//                   prioridad={todo.prioridad}
//                   edit={() => {
//                     setCurrentTodo(todo);
//                     setIsOpen(true);
//                   }}
//                   delete={() => {
//                     setCurrentTodo(todo);
//                     setIsOpenDelete(true);
//                   }}
//                 />
//               );
//             })}
//           </div>
//         </div>
//       </div>
//       <ModalEdit open={isOpen} close={setIsOpen} todo={currentTodo} />
//       <ModalDelete
//         open={isOpenDelete}
//         close={setIsOpenDelete}
//         todo={currentTodo}
//       />
//     </div>
//   );
// }

// export default Home;
