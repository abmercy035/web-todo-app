import "./createtask.css"
const CreateTask = () => {
  const showAddTaskModalBox = () => {
    document.querySelector('.create-task-modal').style.display = "flex"
  }
  return (
    <div className="create-task">
    <div className="create-task-btn pointer" onClick={showAddTaskModalBox}>
      Having Something Add New Task </div>
    </div>
  );
};

export default CreateTask;
