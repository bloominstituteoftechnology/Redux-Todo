import React from 'react';

const addToDoForm = props => {
  return (
    <div>
      <input
        name='toDoText'
        value={props.toDoText}
        type="text"
        onChange={props.handleInputChange}
        placeholder="What needs done?"
      />
      <button onClick={props.addToDo}>+</button>
    </div>
  );
}

export default addToDoForm;