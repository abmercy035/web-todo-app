import "./header.css"
const Header = () => {
  return (
    <header className="header">
      <div className="app-name">TODO APP</div>
      <div className="header-nav">
        <div className="header-form">
          <input type="search" />
          <input type="submit" />
        </div>
        <div className="nav-list">
          <ul>
            <li className="active"> All </li>
            <li>Done </li>
            <li>Pending</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
