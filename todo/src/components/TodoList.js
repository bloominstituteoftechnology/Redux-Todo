import React from 'react';
import './Todo.css';

const TodoList = props => {
    if (props.todolist.length <= 0) {
        return (
            <p className='exampleListItem'> *** Be better than yesterday *** </p>
        );
    } else {
        return (
            props.todolist.map((item, index) => <p key={index}>{item.item}</p>)
        );
    }
}
 
export default TodoList;