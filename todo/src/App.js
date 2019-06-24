import React from "react";
import "./App.css";

//importing form
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <h1>Todo Redux - Retro App</h1>
      <a href="https://github.com/fritzgt" target="blank">
        <i className="fab fa-github" />
      </a>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
