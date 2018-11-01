import React from 'react'
import ToDo from './ToDo'


const TodoList = props => {
	return (
		<div>
			<ul className="ul">
				<ToDo
					list={props.list}
					id={props.id}
					toggleComplete={props.toggleComplete}
				/>
			</ul>
		</div>
	);
};

export default TodoList;