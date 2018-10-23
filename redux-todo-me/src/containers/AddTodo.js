import React, { Component } from 'react';

class AddTodo extends Component {
  
  render() {
    return (
      <div>
        <form action="">
        <input type="text" placeholder='Add todos' />
        </form>
        <button onClick={() =>alert('added todo')}>Click to add todo</button>
      </div>
    );
  }
}

export default AddTodo;