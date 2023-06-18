import Task from "../Task";
import "./tasklist.css";
const TaskList = ({ myTaskList, openTask, deleteTask, changeStatus }) => {
  return (
    <section className="task-list-container">
      {myTaskList?.map((task, key) => (
        <Task
          key={key}
          task={task}
          deleteTask={deleteTask}
          openTask={openTask}
          changeStatus={changeStatus}
        />
      ))}
    </section>
  );
};

export default TaskList;
