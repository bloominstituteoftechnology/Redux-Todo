import React from "react";
import AddItem from "./components/AddItem";
import ShowIncomplete from "./components/ShowIncomplete";
import ShowComplete from "./components/ShowComplete";

import "./App.css";

function App() {
  return (
    <div className="App">
      <AddItem />
      <ShowIncomplete />
      <ShowComplete />
    </div>
  );
}

export default App;
