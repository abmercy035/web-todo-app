import { useEffect, useState } from "react";
import close_icon from "../../assets/close_big.svg"
import Button from "../button";
import "./viewtask.css";
const ViewTask = ({ openedTask, setOpenedTask, changeStatus, deleteTask, myTaskList }) => {
  const [ viewingTask, setViewingTask ] = useState(null);
  useEffect(() => {
    setViewingTask(openedTask);
  }, [ openedTask ]);
  const closeViewTaskBox = () => {
    setOpenedTask(null)
    document.querySelector(".view-task-container").classList.remove("mobile")
  };
  return (
    <aside className="view-task-container">
      <div className="close-window" onClick={ closeViewTaskBox } ><img src={ close_icon } alt="" /> </div>
      {
        viewingTask == null ?
          (
            <div className="no-task-to-view">NO TASK SELECTED</div>
          ) : (
            <div className="view-task-box">
              <div className="view-task-card">
                <div className="title">
                  { openedTask?.title }
                </div>
                { openedTask?.content && <div className="text">{ openedTask?.content }</div> }
                <span className="view-task-date">{ openedTask?.date }</span>
                <div className="view-task-footer">
                  <div className="view-task-action">
                    <Button
                      cls={ openedTask?.status ? "success" : "warning" }
                      click={ () => changeStatus(openedTask?.id) }
                      text={ openedTask?.status ? "Completed" : "Pending" } />
                    <Button
                      cls="danger"
                      click={ (e) => deleteTask(e, openedTask?.id) } text={ "delete" } />
                  </div>
                </div>
              </div>
            </div>
          )
      }
    </aside >
  );
};

export default ViewTask;
