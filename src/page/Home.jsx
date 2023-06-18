import { useEffect, useState } from "react";
import CreateTask from "../components/createtask/CreateTask";
import CreateTaskModal from "../components/CreateTaskModal";
import TaskList from "../components/tasklist/TaskList";
import ViewTask from "../components/viewtask/ViewTask";
import "./home.css";
const Home = ({ sortTaskType, searchValue }) => {
  const [myTaskList, setMyTaskList] = useState([]);
  const [openedTask, setOpenedTask] = useState(null);
  const [newTask, setNewTask] = useState({
    title: "",
    content: "",
    status: false,
    date: "",
    id: "",
  });
  const allTaskList = JSON.parse(localStorage.getItem("myTaskList"));

  //ADD NEW TASK
  const addTask = () => {
    console.log(newTask.title.length);
    if (newTask.title !== "" || newTask.title.length > 3)
      localStorage.setItem(
        "myTaskList",
        JSON.stringify([
          ...allTaskList,
          {
            ...newTask,
            date: new Date().toTimeString(),
            id: crypto.randomUUID(),
          },
        ])
      ),
        (document.querySelector(".create-task-modal").style.display = "none");
    else document.querySelector(".error-pop").style.display = "flex";
    setMyTaskList(JSON.parse(localStorage.getItem("myTaskList")));
  };

  //DELETE NEW TASK
  const deleteTask = (e, id) => {
    e.stopPropagation();
    const updatedTaskList = allTaskList.filter((task) => {
      if (task.id !== id) return task;
    });
    localStorage.setItem("myTaskList", JSON.stringify(updatedTaskList));
    setMyTaskList(JSON.parse(localStorage.getItem("myTaskList")));
    if (openedTask !== null && openedTask.id === id) {
      setOpenedTask(null);
      document.querySelector(".view-task-container").classList.remove("mobile");
    }
  };

  const changeStatus = (id) => {
    const updatedTaskList = allTaskList.map((task) => {
      if (task.id === id) {
        task.status = !task.status;
        setOpenedTask(task);
      }
      if (
        openedTask !== null &&
        openedTask.id === id &&
        sortTaskType !== "all"
      ) {
        setOpenedTask(null);
      }
      return task;
    });
    localStorage.setItem("myTaskList", JSON.stringify(updatedTaskList));
    setMyTaskList(JSON.parse(localStorage.getItem("myTaskList")));
  };

  const handelAddTaskForm = (e) => {
    setNewTask({
      ...newTask,
      [e.target.name]: e.target.value,
    });
    document.querySelector(".error-pop").style.display = "none";
  };

  const openTask = ({ id }) => {
    const updatedTaskList = allTaskList.map((task) => {
      if (task.id === id) setOpenedTask(task);
    });
    document.querySelector(".view-task-container").classList.add("mobile");
  };

  useEffect(() => {
    const updateTaskList = JSON.parse(localStorage.getItem("myTaskList"));
    updateTaskList && setMyTaskList(updateTaskList);
    searchValue &&
      setMyTaskList(
        updateTaskList.filter((task) =>
          task.title.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    if (sortTaskType == "all") return;
    if (sortTaskType == "completed") {
      setMyTaskList(
        updateTaskList.filter((task) => {
          return task.status ?? task;
        })
      );
    } else if (sortTaskType == "pending") {
      setMyTaskList(
        updateTaskList.filter((task) => {
          return !task.status ?? task;
        })
      );
    }
    if (openedTask == null) {
      document.querySelector(".view-task-container").classList.remove("mobile");
    }
  }, [searchValue, sortTaskType, openedTask]);

  return (
    <main className="body">
      <CreateTask />
      <CreateTaskModal
        newTask={newTask}
        addTask={addTask}
        handelAddTaskForm={handelAddTaskForm}
      />
      <TaskList
        myTaskList={myTaskList}
        changeStatus={changeStatus}
        deleteTask={deleteTask}
        openTask={openTask}
      />
      <ViewTask
        openedTask={openedTask}
        changeStatus={changeStatus}
        deleteTask={deleteTask}
      />
    </main>
  );
};

export default Home;
