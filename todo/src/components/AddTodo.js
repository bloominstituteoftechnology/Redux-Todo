import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { addTodo } from '/.actions' 

class AddTodo extends Component {
  constructor(props) { 
    super(props);
      this.state = {
        newTodo: ''
      }
    }
  
  handleNewTodo = event => {
      this.setState({ newTodo: event.target.value}); 
  }
  
  createTodo = () => {
      event.preventDefault(); 
      this.props.addTodo({
        value: this.state.newTodo,   
        complete: false
      });
      this.setState({ 
        newTodo: ''
      }); 
  } 

  render() {
    return (
      <div>
          <input
            placeholder='To Do'
            type='text'
            value={this.state.newTodo}
            onChange={this.handleNewTodo}
          />
          <button onClick={this.createTodo}>Add Todo</button>
      </div>
    ); 
  }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }; 
}; 

export default connect(mapStateToProps, { addTodo })(App); 