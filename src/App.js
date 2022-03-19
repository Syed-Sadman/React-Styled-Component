import React, { useState } from "react";
import TaskList from "./components/IT-G/TaskList";
import TaskForm from "./components/IT-G/TaskForm";

function App() {
  const [task, setTask] = useState([]);

  return (
    <div className="App">
      <TaskForm task={task} setTask={setTask} />
      <TaskList task={task} setTask={setTask} />
    </div>
  );
}

export default App;
