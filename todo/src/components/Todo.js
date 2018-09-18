import React from 'react';

function Todo(props) {
	return (
		<li
			className="Todo"
      style={props.completed ? { textDecoration: 'line-through' } : {}}
      onClick={}
		>
			{props.value}
		</li>
	);
}

export default Todo;
