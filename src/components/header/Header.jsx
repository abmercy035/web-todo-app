import "./header.css";
const Header = ({ setSearchValue, sortTaskType, setSortTaskType }) => {
  return (
    <header className="header">
      <div className="app-name">TODO APP</div>
      <div className="header-nav">
        <div className="header-form">
          <input
            type="search"
            placeholder="search task"
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        <div className="nav-list pointer">
          <ul>
            <li
              className={sortTaskType == "all" ? "active" : ""}
              onClick={() => setSortTaskType("all")}
            >
              {" "}
              All{" "}
            </li>
            <li
              className={sortTaskType == "completed" ? "active" : ""}
              onClick={() => setSortTaskType("completed")}
            >
              Completed{" "}
            </li>
            <li
              className={sortTaskType == "pending" ? "active" : ""}
              onClick={() => setSortTaskType("pending")}
            >
              Pending
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
