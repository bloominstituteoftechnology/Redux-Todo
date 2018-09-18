import React from 'react';

const TodoForm = props => {
  <div>
    <input
        name="textHolder"
        value={this.props.currentText}
        type="text"
        onChange={this.props.handleInputChange}
        placeholder= "Add an item here"
    />
    <button onClick={this.props.addTodo}>Add</button>
  </div>
}

export default TodoForm;