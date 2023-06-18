import { useEffect, useState } from "react";
import "./viewtask.css";
const ViewTask = ({ openedTask, changeStatus, deleteTask }) => {
  const [viewingTask, setViewingTask] = useState(null);
  useEffect(() => {
    setViewingTask(openedTask);
  }, [openedTask]);
  const closeViewTaskBox = () => {
    document.querySelector(".view-task-container").classList.remove("mobile")
  };
  return (
    <aside className="view-task-container">
      <div className="close-window pointer" onClick={closeViewTaskBox} >X </div>
      {viewingTask == null ? (
        <div className="no-task-to-view">CLICK A TASK TO VIEW</div>
      ) : (
        <div className="task-box">
          <div className="task-title">{openedTask?.title}</div>
          <div className="task-body">{openedTask?.content} </div>
          <div className="task-footer">
            <div className="date">{openedTask?.date}</div>
            <div className="task-action">
              <button
                className={openedTask?.status ? "success" : "warning"}
                onClick={() => {
                  changeStatus(openedTask?.id);
                }}
              >
                {openedTask?.status ? "Completed" : "Pending"}
              </button>
              <button
                className="danger"
                onClick={(e) => {
                  deleteTask(e, openedTask?.id);
                }}
              >
                delete
              </button>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};

export default ViewTask;
