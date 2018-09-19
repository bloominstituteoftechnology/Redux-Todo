// React
import React from 'react';

// Styles
import './TodoItem.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

const TodoItem = props => {
	return(
		<div className = 'expand-vert'>
			<div 
				id = { props.index } 
				onClick = { e => props.toggleCompleted(e.target.id) } 
				className = 'list-item fade-in' 
				style = { props.item.completed ? { textDecoration: 'line-through' } : {} }
			>{ props.item.value }</div>

			<Button 
				color = 'danger' 
				className = 'fade-in' 
				onClick = { () => props.deleteItem(props.index) }
			>X</Button>
		</div>
	);
}

export default TodoItem;
