import React from "react";
import "./App.css";

//importing form
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <h1>Todo Redux App</h1>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
