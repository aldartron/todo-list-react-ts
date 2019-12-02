import React from "react";
import "./App.css";
import TaskMain from "./components/TaskMain";

const App: React.FC = () => {
    return (
        <div className="App">
            <div>
                <h2>Another one todo-list</h2>
                <h3>React + TS</h3>
                <TaskMain/>
            </div>
        </div>
    );
};

export default App;
