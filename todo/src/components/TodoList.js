import React from 'react';
import Todo from './Todo';
import './Todo.css';

const TodoList = props => {
    console.log("******** : ",props.toDoList);

  return (
    <div>
	    <ul>	
	      {props.toDoList.map(todo => (
	        <li>
                {todo.task}
		        {/*<Todo
		            handleToggleComplete = {props.handleToggleComplete}
		            key = {todo.id}
		            todo = {todo}
                /> */}
	        </li>
	      ))}
	    </ul>
    </div>
  );
};

export default TodoList;