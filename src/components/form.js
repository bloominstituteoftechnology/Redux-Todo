import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../action/action';


class Form extends Component {
    state = {
        value: ""
    }

    
    
    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

    addATodo = () => {
        this.props.addTodo(this.state.value)
    }

  render() {
    return (
      <div>
          <input 
          type="text" 
          placeholder="add a task..."
          name="value"
          value={this.state.value}
          onChange={this.handleChanges} />
          <button onClick={this.addATodo}>Add</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, {addTodo})(Form)