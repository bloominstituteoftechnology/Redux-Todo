import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { addTodo } from '../actions/Action' 

class TodoForm extends Component {
  constructor(props) { 
    super(props);
      this.state = {
        doList: ''
      };
    }
  
  handleTodosChange = event => {
      this.setState({ doList: event.target.value}); 
  }
  
  createTodo = () => {
    const { doList } = this.state; 
    const newTodo = { doList, completed: false, id: Date.now() }; 
    this.props.addTodo(newTodo); 
    this.setState({ doList: ''}); 
  }; 

  render() {
    return (
      <div>
          <input
            onChange={this.handleTodosChange}
            placeholder='Add Todo'            
            value={this.state.doList}            
          />
          <button onClick={this.createTodo}>Add Todo</button>
      </div>
    ); 
  }
}

export default connect(null, { addTodo })(TodoForm); 