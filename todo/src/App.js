import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions/index'

class App extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: {
        todoText : ''
      },
    };
  }
  handleChanges = ev => {
    this.setState({ newTodo: { todoText : ev.target.value }});
  };

  addNewTodo = ev =>{
    ev.preventDefault();
    this.setState(
      { newTodo: { id : new Date()},}
    );
    this.props.addTodo(this.state.newTodo);
    
    this.setState(
      { newTodo: { id : null, todoText : '' }}
    )
  }

  render() {

    return (
     <div>
        <input
          type="text"
          name="inputText"
          onChange={this.handleChanges}
          placeholder="New title"
          value={this.state.inputText}
        />
        <button onClick={this.addNewTodo}>add</button>

       {this.props.todos.map( (todo) => (
         <p key={todo.id}>  {todo.todoText}</p>
       ))}
       
      </div>
    );
  }
}

  const mapStateToProps = (state) => {
    return { todos: state.todoList };
   };
 
   export default connect(mapStateToProps, { addTodo })(App);

