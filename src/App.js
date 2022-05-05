import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gen1 from "../src/pages/Generations/Gen1";
import Gen2 from "../src/pages/Generations/Gen2";
import Gen3 from "../src/pages/Generations/Gen3";
import Gen4 from "../src/pages/Generations/Gen4";
import Gen5 from "../src/pages/Generations/Gen5";
import Gen6 from "../src/pages/Generations/Gen6";
import Gen7 from "../src/pages/Generations/Gen7";
import Gen8 from "../src/pages/Generations/Gen8";
import Navigation from "./components/Navigation/Navigation";
import "./style/App.scss";

function App() {
  const [activePage, setActivePage] = useState("Gen 1");
  const [navActive, setNavActive] = useState(false);

  function toggleNav() {
    setNavActive(!navActive);
  }

  function updateActivePage(e) {
    setActivePage(e.target.text);
    toggleNav();
  }

  return (
    <Router>
      <div className="app">
        <Navigation
          navActive={navActive}
          toggleNav={toggleNav}
          updateActivePage={updateActivePage}
        />
        <Routes>
          <Route exact path="/" element={<Gen1 />} />
          <Route path="/Gen2" element={<Gen2 />} />
          <Route path="/Gen3" element={<Gen3 />} />
          <Route path="/Gen4" element={<Gen4 />} />
          <Route path="/Gen5" element={<Gen5 />} />
          <Route path="/Gen6" element={<Gen6 />} />
          <Route path="/Gen7" element={<Gen7 />} />
          <Route path="/Gen8" element={<Gen8 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
