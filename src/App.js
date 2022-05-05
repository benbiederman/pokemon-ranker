import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gen1 from "../src/pages/Generations/Gen1";
import Gen2 from "../src/pages/Generations/Gen2";
import Gen3 from "../src/pages/Generations/Gen3";
import Gen4 from "../src/pages/Generations/Gen4";
import Gen5 from "../src/pages/Generations/Gen5";
import Gen6 from "../src/pages/Generations/Gen6";
import Gen7 from "../src/pages/Generations/Gen7";
import Gen8 from "../src/pages/Generations/Gen8";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import "./style/App.scss";

function App() {
  const [activePage, setActivePage] = useState("Gen 1");
  const [navActive, setNavActive] = useState(false);
  const [activeHeader, setActiveHeader] = useState("favorites");

  function toggleNav() {
    setNavActive(!navActive);
  }

  function updateActivePage(e) {
    setActivePage(e.target.text);
    toggleNav();
  }

  function changeHeader(e) {
    setActiveHeader(e.target.innerHTML.toLowerCase());
  }

  useEffect(() => {
    document.title = `${activePage} Pokemon`;
  }, [activePage]);

  return (
    <Router>
      <div className="app">
        <Header activeHeader={activeHeader} changeHeader={changeHeader} />
        <Navigation
          navActive={navActive}
          toggleNav={toggleNav}
          updateActivePage={updateActivePage}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={<Gen1 activeHeader={activeHeader} />}
          />
          <Route path="/Gen2" element={<Gen2 activeHeader={activeHeader} />} />
          <Route path="/Gen3" element={<Gen3 activeHeader={activeHeader} />} />
          <Route path="/Gen4" element={<Gen4 activeHeader={activeHeader} />} />
          <Route path="/Gen5" element={<Gen5 activeHeader={activeHeader} />} />
          <Route path="/Gen6" element={<Gen6 activeHeader={activeHeader} />} />
          <Route path="/Gen7" element={<Gen7 activeHeader={activeHeader} />} />
          <Route path="/Gen8" element={<Gen8 activeHeader={activeHeader} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
