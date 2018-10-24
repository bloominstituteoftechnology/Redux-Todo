import React from 'react';

const TodoList = props => {
    return (
        props.todolist.map((item, index) => <p key={index}>{item.item}</p>)
    );
}
 
export default TodoList;