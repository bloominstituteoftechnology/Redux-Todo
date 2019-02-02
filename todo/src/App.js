import React from "react";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
//import "./styles.css";

class App extends React.Component {
  // appendNewTodo = text => {
  //   // first make an object with the same attributes as the object in the todoArr
  //   // set it's task value to what was passed to it from the handleSubmit method in TodoForm
  //   if (text != "") {
  //   const newTodo = {
  //     value: text,
  //     completed: false
  //   }

  //   // now setState to update this.state here in App
  //   // this.setState(prevState => {
  //   //   // first make a copy of the previous state of this.state.todos
  //   //   const todos = prevState.todos.slice();
  //   //   // now push the newTodo onto the copy
  //   //   todos.push(newTodo);
  //   //   // now set this.state.todos = to the new todos copy with the added task
  //   //   return { todos: todos }
  //   // })
  //   }
  // }

  // // handleCompleted = event => {
  // //   if (!this.state.completed) {
  // //     let newTodoArr = this.state.todos.filter( props => {
  // //       return props.completed != true
  // //     })
  // //     this.setState({todos: newTodoArr})
  // //   }
  // // }

  // toggleCompleted = id => {
  //   let todoArray = this.props.state.todos.map(todo => { // get copy of entire todoArray
  //     if (id === todo.id) { // match id sent in from Todo onClick event to id in todoArray
  //       todo.completed = !todo.completed; // flip completed status
  //       return todo;
  //     } else {
  //       return todo;
  //     }
  //   })
  //   this.props.toggleCompleted(todoArray)
  // }

  render() {
    return (
      <div>
        <h1>Todo List App:</h1>
        {/* <TodoList toggleCompleted={this.toggleCompleted}/> */}
        <TodoList />
        {/* <TodoForm
          createTodo={this.appendNewTodo}
          clearCompleted={this.handleCompleted}
        /> */}
        <TodoForm />
      </div>
    );
  }
}

export default App;
