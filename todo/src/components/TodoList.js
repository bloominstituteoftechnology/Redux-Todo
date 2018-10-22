import React from 'react';

import TodoTask  from './TodoTask';

const TodoList = (props) => {
    return (
        <div>
            {props.listArray.map((task) => <TodoTask task={task} />)}
        </div>
    )
}

export default TodoList;