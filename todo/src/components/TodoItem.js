import React from 'react';

const TodoItem = (props) => {
    return (
        <div>
           {props.todo.todo}
        </div>
    );
};

export default TodoItem;