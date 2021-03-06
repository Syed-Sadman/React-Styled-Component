import React from "react";

function TaskItem({ task, index, removeTask }) {
  let date = new Date(task.date);
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  const removeHandle = (i) => {
    removeTask(i);
  };

  return (
    <div className="task-item">
      <button className="remove-item" onClick={() => removeHandle(index)}>
        x
      </button>
      <div className="date">{day + "/" + month + "/" + year}</div>
      <div className="desc">{task.desc}</div>
      <div className="price">{task.action}</div>
    </div>
  );
}

export default TaskItem;
