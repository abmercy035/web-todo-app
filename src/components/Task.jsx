import { useState } from "react";

const Task = ({ task }) => {
  const [taskStatus, setTaskStatus] = useState(false);

  const handleTaskStatus = () => {
    setTaskStatus((prevStatus) => !prevStatus);
  };

  return (
    <div className={taskStatus ? "task-card task-done" : "task-card"}>
      <div className="task-checker">
        <label className="checkbox-btn">
          <label htmlFor="checkbox"></label>
          <input
            id="checkbox"
            type="checkbox"
            onChange={handleTaskStatus}
            checked={task?.status}
          />
          <span className="checkmark"></span>
        </label>
      </div>
      <div className="task">
        <div className="task-title">{task?.title}</div>
        <div className="task-body">{task?.content} </div>
        <div className="task-footer">
          <div className="task-date">{task?.date}</div>
          <button className="delete">delete</button>
        </div>
      </div>
    </div>
  );
};

export default Task;
