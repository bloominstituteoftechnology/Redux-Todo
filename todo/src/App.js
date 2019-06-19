import React from "react";
import AddItem from "./components/AddItem";
import IncompleteList from "./components/IncompleteLIst";
import CompleteList from "./components/CompleteList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <AddItem />
      {/*   
    <IncompleteList />
    <CompleteList /> 
    */}
    </div>
  );
}

export default App;
