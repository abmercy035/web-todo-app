import { useEffect, useState } from "react";
import Task from "../Task";
import "./tasklist.css";
const TaskList = () => {
  const [myTaskList, setMyTaskList] = useState([]);
  localStorage.setItem(
    "myTaskList",
    JSON.stringify([
      {
        title: "first Task",
        content: "first Task content details",
        status: false,
        date: "34/34/3456",
      },
      {
        title: "second Task",
        content: "second Task content details",
        status: false,
        date: "34/34/3456",
      },
      {
        title: "third Task",
        content: "third Task content details",
        status: false,
        date: "34/34/3456",
      },
    ])
  );

  useEffect(() => {
    const updateTaskList = JSON.parse(localStorage.getItem("myTaskList"));
    updateTaskList && setMyTaskList(updateTaskList);
  }, []);
  return (
    <section className="task-list-container">
      {myTaskList?.map((task, key) => (
        <Task key={key} task={task} />
      ))}
    </section>
  );
};

export default TaskList;
