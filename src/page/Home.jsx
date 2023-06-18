import CreateTask from "../components/createtask/CreateTask";
import TaskList from "../components/tasklist/TaskList";
import ViewTask from "../components/viewtask/ViewTask";
import "./home.css"
const Home = () => {
  return (
    <main className="body">
      <CreateTask />
      <TaskList />
      <ViewTask />
    </main>
  );
};

export default Home;
