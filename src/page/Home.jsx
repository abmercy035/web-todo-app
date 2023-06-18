import { useEffect, useState } from "react";
import CreateTask from "../components/createtask/CreateTask";
import CreateTaskModal from "../components/CreateTaskModal";
import TaskList from "../components/tasklist/TaskList";
import ViewTask from "../components/viewtask/ViewTask";
import "./home.css";
const Home = ({ sortTaskType, searchValue }) => {
  //Task list
  const [myTaskList, setMyTaskList] = useState([]);
  //currently open task
  const [openedTask, setOpenedTask] = useState(null);
  //new task constainer
  const [newTask, setNewTask] = useState({
    title: "",
    content: "",
    status: false,
    date: "",
    id: "",
  });
  //Retriving tasks from localStorage
  const allTaskList = JSON.parse(localStorage.getItem("myTaskList"));

  /*
  * ADD NEW TASK: 
-FIRST RETRIVE THEN STRINGIFY,
-ADD NEW TASK, AND
-THEN UPDATE LOCALSTORAGE TASKLIST 
 */
  const addTask = () => {
    if (newTask.title !== "" || newTask.title.length > 3) {
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
      )(
        //HERE REMOVING THE ADD TASK MODAL FORM
        (document.querySelector(".create-task-modal").style.display = "none")
      );
    } else document.querySelector(".error-pop").style.display = "flex";
    setMyTaskList(JSON.parse(localStorage.getItem("myTaskList")));
  };

  /*
*DELETE NEW TASK:
-FIRST RETRIVE THEN STRINGIFY,
-ADD NEW TASK, AND
-THEN UPDATE LOCALSTORAGE TASKLIST 
 */
  const deleteTask = (e, id) => {
    e.stopPropagation();
    const updatedTaskList = allTaskList.filter((task) => {
      if (task.id !== id) return task;
    });
    localStorage.setItem("myTaskList", JSON.stringify(updatedTaskList));
    setMyTaskList(JSON.parse(localStorage.getItem("myTaskList")));
    if (openedTask !== null && openedTask.id === id) {
      setOpenedTask(null);
      //REMOVING VIEWTASK ELEMENT WHEN CURRENTLY VIEWED TASK IS DELETED
      document.querySelector(".view-task-container").classList.remove("mobile");
    }
  };

// CHANGING ASK STATUS
  const changeStatus = (id) => {
    const updatedTaskList = allTaskList.map((task) => {
      if (task.id === id) {
        task.status = !task.status;
        setOpenedTask(task);
      }
      
// REMOVING CURRENTLY VIEWED TASK FROM VIEW TASK SCREEN, WHEN STATUS CHANGES
//OUTSIDE THE "ALL" TAB;
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

//COLLECTING ADD NEW TASK FORM INPUT
  const handelAddTaskForm = (e) => {
    setNewTask({
      ...newTask,
      [e.target.name]: e.target.value,
    });
    document.querySelector(".error-pop").style.display = "none";
  };

//GETTING TASK TO BE VIEWED ON TASK ELEMENT CLICKED
  const openTask = ({ id }) => {
    allTaskList.map((task) => {
      if (task.id === id) setOpenedTask(task);
    });
    //ADDING THE CLASS MOBILE TO VIEW TASK ELEMENT
    // ALLOWING VIEW IF ON MOBILE OR SMALLER SCREENS 
    document.querySelector(".view-task-container").classList.add("mobile");
  };

  useEffect(() => {
    //UPDATING TASKLIST 
    const updateTaskList = JSON.parse(localStorage.getItem("myTaskList"));
    updateTaskList && setMyTaskList(updateTaskList);
    //UPDATING TASKLIST SEARCH INPUT CHANGE 
    searchValue &&
      setMyTaskList(
        updateTaskList.filter((task) =>
          task.title.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    //UPDATING TASKLIST ON TAB CHANGE 
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
    //REMOVING THE CLASS MOBILE TO VIEW TASK ELEMENT
    //WHEN OPEN I.E VIEW TASK ELEM TASK IS EMPTY
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
