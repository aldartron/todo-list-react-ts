import React from 'react';
import './App.css';
import TaskPanel from "./components/TaskPanel";

const App: React.FC = () => {
  return (
    <div className="App">
        <h2>Another one todo-list</h2>
        <h3>React + TS</h3>
        <TaskPanel/>
    </div>
  );
};

export default App;
