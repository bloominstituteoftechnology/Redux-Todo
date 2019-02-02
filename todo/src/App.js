import React from "react";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
//import "./styles.css";

class App extends React.Component {
  // // handleCompleted = event => {
  // //   if (!this.state.completed) {
  // //     let newTodoArr = this.state.todos.filter( props => {
  // //       return props.completed != true
  // //     })
  // //     this.setState({todos: newTodoArr})
  // //   }
  // // }

  render() {
    return (
      <div>
        <h1>Todo List App:</h1>
        <TodoList />
        <TodoForm />
      </div>
    );
  }
}

export default App;
