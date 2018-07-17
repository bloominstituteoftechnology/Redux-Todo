import React from 'react';

class TodoForm extends React.Component {
  state = { todo: '' }
  render() { 
    return (
      <div>
        <input type="text"/>
        <button>Add Todo</button>
      </div>
      );
  }
}
 
export default TodoForm;