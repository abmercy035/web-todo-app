import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./components/header/Header";
import Home from "./page/Home";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [sortTaskType, setSortTaskType] = useState("all");
  // useEffect(()=>{
  //   console.log(searchValue)
  // }, [searchValue])
  return (
    <>
      <Header
        setSearchValue={setSearchValue}
        setSortTaskType={setSortTaskType}
        sortTaskType={sortTaskType}
      />
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home sortTaskType={sortTaskType}   setSortTaskType={setSortTaskType} searchValue={searchValue} />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
