import React, { useRef } from "react";

function TaskForm({ task, setTask }) {
  const desc = useRef(null);
  const date = useRef(null);
  const action = useRef(null);

  const AddTask = (e) => {
    e.preventDefault();

    let d = date.current.value.split("-");
    let newD = new Date(d[0], d[1] - 1, d[2]);

    setTask([
      ...task,
      {
        desc: desc.current.value,
        action: action.current.value,
        date: newD.getTime(),
      },
    ]);

    desc.current.value = "";
    action.current.value = null;
    date.current.value = null;
  };

  return (
    <form className="task-form" onSubmit={AddTask}>
      <div className="form-inner">
        <input
          type="date"
          name="date"
          id="date"
          placeholder=" date..."
          ref={date}
        />
        <input
          type="text"
          name="desc"
          id="desc"
          placeholder="Comment/action"
          ref={desc}
        />
        <input
          type="number"
          name="task no"
          id="task no"
          placeholder="task no"
          ref={action}
        />
        <input type="submit" value="Add Task" />
      </div>
    </form>
  );
}

export default TaskForm;
