import React from 'react';
import './App.css';
import TodoList from "./components/TodoList.js";
import { connect } from "react-redux";
import { addTodo} from "./actions";

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
    return {
      addToDo: state.addTodo
    };
  };

export default connect(mapStateToProps, {addTodo})(App);
