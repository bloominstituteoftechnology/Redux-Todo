import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

class App extends React.Component {
  render() {
    return (
      <div>
        <p>Todo App</p>
        <TodoList />
        <TodoForm />
      </div>
    );
  }
}

export default App;
