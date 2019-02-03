import React from "react";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const App = () => {
  return (
    <div>
      <h1>Todo List App:</h1>
      <TodoList />
      <TodoForm />
    </div>
  );
};

export default App;
