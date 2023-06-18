import { useState } from "react";
import Task from "../Task";
import "./tasklist.css";
const TaskList = () => {
  const [myTaskList, setMyTaskList] = useState([
    {
      title: "first Task",
      content: "first Task content details",
      status: false,
      date: "34/34/3456",
    },
  ]);

  return (
    <section className="task-list-container">
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
    </section>
  );
};

export default TaskList;
