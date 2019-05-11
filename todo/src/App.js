import React, {Component} from "react";
import "./App.css";
import {connect} from "react-redux";

import TodoList from "./components/TodoList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    value: state.value,
    completed: state.completed
  };
};

export default App;
