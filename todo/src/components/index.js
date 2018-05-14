
import React from 'react';

const AddButton = (props) => <button onClick={props.onClick}>Add</button>;

export const AddField = (props) => <input
  name={props.name}
  onChange={props.onChange}
  value={props.value}
  placeholder="New Task" />

export const ListView = (props) => {
  return (
    <ul>
      {
        props.todos.map((todo, index) => <li key={index} onClick={() => props.onClick(index)}>{todo.text}</li>)
      }
    </ul>
  );
}


export default AddButton;
