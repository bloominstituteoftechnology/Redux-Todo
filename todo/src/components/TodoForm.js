import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { addTodo } from '/.actions' 

class TodoForm extends Component {
  constructor(props) { 
    super(props);
      this.state = {
        todos: ''
      };
    }
  
  handleTodosChange = event => {
      this.setState({ todos: event.target.value}); 
  }
  
  createTodo = () => {
    const { todos } = this.state; 
    const newTodo = { todos, completed: false, id: Date.bow() }; 
    this.props.addTodo(newTodo); 
    this.setState({ todos: ''}); 
  }; 

  render() {
    return (
      <div>
          <input
            onChange={this.handleTodosChange}
            placeholder='Add Todo'            
            value={this.state.todos}            
          />
          <button onClick={this.createTodo}>Add Todo</button>
      </div>
    ); 
  }
}

export default connect(null, { addTodo })(TodoForm); 