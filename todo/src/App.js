import React from 'react';
import './App.css';
import TodoList from "./components/TodoList.js";
import { connect } from "react-redux";
import { addTodo, completeTodo, deleteTodo } from "./actions";

const App = props => {

    return (
      <div className="App">
      <div>
        <form>
        <input type="text" placeholder="Add your todo"/>
        <button onSubmit={props.addToDo}>Add an Item</button>
        </form>
      </div>
      <h2>Your To Do List</h2>
        <TodoList />
      </div>
    );
}

  const mapStateToProps = state => {
    console.log(state);
    return {
      value: state.value,
      completed: state.completed
    };
  };

export default connect(mapStateToProps, { addTodo, completeTodo, deleteTodo })(TodoList);
