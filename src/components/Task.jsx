import { useState } from "react";

const Task = () => {
  const [taskStatus, setTaskStatus] = useState(true) 
  
  const handleTaskStatus = () => {
    setTaskStatus(prevStatus => !prevStatus)
    
  }
  
  return (
    <div className={taskStatus ? "task-card task-done" : "task-card"}>
      <div className="task-checker">
        <label className="checkbox-btn">
          <label htmlFor="checkbox"></label>
          <input id="checkbox" type="checkbox" onChange={handleTaskStatus} checked={taskStatus} />
          <span className="checkmark"></span>
        </label>
      </div>
      <div className="task">
        <div className="task-title">Buy Some Stuffss</div>
        <div className="task-body">
          Cars ajdsdfjhfdfj sfhhfsjdsjsdsfhhfsjdsjsdsfhhfsjdsjsd Last line
        </div>
        <div className="task-footer">
          <div className="task-date">34/34/2356 - 44pm </div>
          <button className="delete">delete</button>
        </div>
      </div>
    </div>
  );
};

export default Task;
