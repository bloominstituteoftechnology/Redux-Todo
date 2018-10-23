import React from 'react';

const TodoList = props => {
    return (
        props.todolist.map(item => <p>{item.item}</p>)
    );
}
 
export default TodoList;