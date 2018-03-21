import React, { Component } from 'react';
import { addTodo } from '../actions';
import { connect } from 'react-redux';

class TodoInput extends Component {
  state = {
    todo: ''
  }
  
  handleInputChange({ target }) {
    this.setState({
      todo: target.value
    });
  }

  handleSubmit() {
    this.props.addTodo(this.state.todo);
    this.setState({
      todo: ''
    });
  }

  render() {
    return (
      <div>
        <input 
          onChange={(event) => this.handleInputChange(event)}
          value={this.state.todo}
        />
        <button onClick={() => this.handleSubmit()}>Add Todo</button>
      </div>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProp, { addTodo })(TodoInput);