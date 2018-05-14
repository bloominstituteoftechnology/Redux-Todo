
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
        props.todos.map((todo, index) => {
          if (!todo.complete) {
            return (
              <li key={index} onClick={() => props.onClick(todo.id)}>{todo.text}<button onClick={() => props.onButton(todo.id)} >Delete</button></li>

            )
          }
          else {
            return (
              <li key={index} onClick={() => props.onClick(todo.id)}><s>{todo.text}</s><button onClick={() => props.onButton(todo.id)} >Delete</button></li>

            )
          }
        }
        )
      }
    </ul>
  );
}


export default AddButton;
