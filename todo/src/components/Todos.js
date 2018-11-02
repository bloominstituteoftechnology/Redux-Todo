import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completeToDo } from '../actions';

const style = { textDecoration: 'line-through' };

const Todos = props => {
  return (
    <div>
      {props.todos.map(todo => (
        <li
          //style={todo.completed ? style : null}
          onClick={() => props.completeToDo(todo.id)}
          key={todo.id}
        >
          {todo.text}
        </li>
      ))}
    </div>
  );
};

export default connect(null, { completeToDo })(Todos);

/* const ToDoList = props => {
	return (
		<div>
			<ul className="ul">
				<ToDo
					todos={props.todos}
					id={props.id}
					toggleComplete={props.toggleComplete}
				/>
			</ul>
		</div>
	);
};

export default ToDoList; */