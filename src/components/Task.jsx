import { useState } from "react";
import Button from "./Button";

const Task = ({ task, openTask, deleteTask, changeStatus }) => {
  return (
    <div className={ task?.status ? "task-card task-done" : "task-card pointer" }>
      <label className="checkbox-btn icon">
        <label htmlFor="checkbox"></label>
        <input
          id="checkbox"
          type="checkbox"
          onChange={ () => changeStatus(task.id) }
          checked={ task?.status }
        />
        <span className="checkmark"></span>
      </label>
      <div className="content task">
        <span className="title">{ (task?.title).slice(0, 50) }</span>
        { task?.content && <div className="desc">{ (task?.content).slice(0, 150) }...</div> }
        <div className="task-date">{ 235 + " /" + 4 }</div>
        <div className="actions">
          <div>
            <Button cls="danger del-task-btn" click={ (e) => deleteTask(e, task?.id) } text={ "Delete" } />
          </div>
          <div>
            <Button cls="info view-task-btn pointer" click={ (e) => openTask(task) } text={ "view" } />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
