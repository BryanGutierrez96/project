import React from 'react';
import './App.css';
import Workout from './views/ShowWorkout'
import CreateWorkout from './views/CreateWorkout'
function App() {
  return (
    <div className="App">
      <Workout/>
      <CreateWorkout/>
    </div>
  );
}

export default App;
