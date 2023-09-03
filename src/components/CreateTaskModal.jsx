
import close_icon from "../assets/close_big.svg"
const CreateTaskModal = ({ addTask, handelAddTaskForm, newTask }) => {

  const closeCreateTaskModalBox = () => {
    document.querySelector(".create-task-modal").style.display = "none";
  };
  return (
    <div className="create-task-modal">
      <div className="danger error-pop"> Sorry title cannot be less than words</div>
      <div
        className="close-window pointer"
        onClick={ closeCreateTaskModalBox }
      >
        <img src={close_icon} alt="" />
      </div>
      <div className="create-task-conatainer">
        <input
          name="title"
          value={ newTask.title }
          onChange={ handelAddTaskForm }
          type="text"
          placeholder="Task Title"
          className="task-input"
        />
        <textarea
          name="content"
          value={ newTask.content }
          onChange={ handelAddTaskForm }
          placeholder="Task Body"
          className="task-input"
        />
        <button className="task-btn danger" onClick={ addTask }>
          Add Task
        </button>
      </div>
    </div>
  );
};

export default CreateTaskModal;
