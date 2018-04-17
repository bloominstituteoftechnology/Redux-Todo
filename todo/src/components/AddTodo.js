import React from 'react';
import './todo.css'

const AddTodo = ({ onSubmit }) => {
  let input;
  return (
    <div className="submitForm">
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          onSubmit(input.value);
          input.value = '';
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button className="button" type="submit">
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddTodo;