import React, { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import "./style/App.scss";

function App() {
  const [activePage, setActivePage] = useState("Gen 1");

  return (
    <div className="app">
      <Navigation />
    </div>
  );
}

export default App;
