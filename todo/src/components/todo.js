import React, { Component } from 'react';

class Todo extends Component {
  render() { 
    const { todo } = this.props.todo
    return ( 
      <>
      <p>{todo}</p>
      </>
    );
  }
}

export default Todo;