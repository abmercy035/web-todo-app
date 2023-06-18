
const CreateTaskModal = ({addTask, handelAddTaskForm, newTask }) => {
   
  const closeCreateTaskModalBox = () => {
    document.querySelector(".create-task-modal").style.display = "none";
  };
  return (
    <div className="create-task-modal">
      <div className="danger error-pop"> title cannot be empty or less than 3</div>
      <div
        className="close-window pointer"
        onClick={closeCreateTaskModalBox}
      >
        X
      </div>
      <div className="create-task-conatainer">
        <input
          name="title"
          value={newTask.title}
          onChange={handelAddTaskForm}
          type="text"
          placeholder="Task Title"
          className="task-input"
        />
        <textarea
          name="content"
          value={newTask.content}
          onChange={handelAddTaskForm}
          placeholder="Task Body"
          className="task-input"
        />
        <button className="task-btn success" onClick={addTask}>
          {" "}
          Add Task
        </button>
      </div>
    </div>
  );
};

export default CreateTaskModal;
