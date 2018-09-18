import React from "react";
import AddTodo from "./components/AddTodo";
import TodosList from "./components/TodosList";

const App = () => {
  return (
    <div>
      <TodosList />
      <AddTodo />
    </div>
  );
};
export default App;
