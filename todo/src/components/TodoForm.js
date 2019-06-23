import React, { Component } from 'react';


const TodoForm = props => {
 return (
     <div>
         <input
         name="todoText"
         value={props.todoText}
         type="text"
         onChange={props.handleInputChange}
         placeholder="add todo"
         />
         <button onClick={props.addTodo}>Add Todo</button>
     </div>
 );
};

export default TodoForm;