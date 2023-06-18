import Task from "../Task";

import "./viewtask.css";
const ViewTask = () => {
  return (
    <aside className="view-task-container">
      <div className="task-box">
        <div className="task-title">Buy Some Stuffss</div>
        <div className="task-body">
          Cars ajdsdfjhfdfj sfhhfsjdsjsdsfhhfsjdsjsdsfhhfsjdsjsd Last lineCars
          ajdsdfjhfdfj sfhhfsjdsjsdsfhhfsjdsjsdsfhhfsjdsjsd Lastline
        </div>
        <div className="task-footer">
          <div className="date"> 48/45/6654 </div>
        <div className="task-action">
          <button className="info"> Completed </button>
          <button className="danger"> delete </button>
        </div>
        </div>
      </div>
    </aside>
  );
};

export default ViewTask;
