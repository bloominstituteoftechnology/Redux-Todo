import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions/index'

class App extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: {
        id : null,
        todoText : ''
      },
    };
  }

  render() {

    return (
     <div>
       {this.props.todos.map( (todo) => (
         <p>{todo.todoText}</p>
       ))}
       
      </div>
    );
  }
}

  const mapStateToProps = (state) => {
    return { todos: state.todoList };
   };
 
   export default connect(mapStateToProps, { addTodo })(App);

