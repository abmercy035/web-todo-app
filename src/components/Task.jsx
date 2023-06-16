const Task = () => {
  return (
    <div className="task-card">
      <div className="task-checker">
        <label className="checkbox-btn">
          <label htmlFor="checkbox"></label>
          <input id="checkbox" type="checkbox" />
          <span className="checkmark"></span>
        </label>
      </div>
      <div className="task">
        <div className="task-title">Buy Some Stuffss</div>
        <div className="task-body">
          Cars ajdsdfjhfdfj sfhhfsjdsjsdsfhhfsjdsjsdsfhhfsjdsjsd Last line
        </div>
        <div className="task-footer">
          <div className="task-date">34/34/2356 - 44pm </div>
          <button className="delete">delete</button>
        </div>
      </div>
    </div>
  );
};

export default Task;
