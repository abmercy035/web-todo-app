import { useState } from "react";

const Task = ({ task, openTask, deleteTask, changeStatus }) => {
  return (
    <div onClick={() => openTask(task)}
      className={task?.status ? "task-card task-done pointer" : "task-card pointer"}>
      <div className="task-checker">
        <label className="checkbox-btn">
          <label htmlFor="checkbox"></label>
          <input
            id="checkbox"
            type="checkbox"
            onChange={() => changeStatus(task.id)}
            checked={task?.status}
          />
          <span className="checkmark"></span>
        </label>
      </div>
      <div className="task">
        <div className="task-title">{(task?.title).slice(0,50)}</div>
        <div className="task-body">{(task?.content).slice(0, 150)}... </div>
        <div className="task-footer">
          <div className="task-date">{task?.date}</div>
          <button className="delete" onClick={(e) => deleteTask(e, task?.id)}>
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
