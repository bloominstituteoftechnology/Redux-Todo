import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import Form from "./components/Form";


const App =()=> {
  
    return (
      <div className="todo-list-container">
        <h3>To-do List</h3>
        <Form />
        <TodoList />
      </div>
    );
  }


export default App;
