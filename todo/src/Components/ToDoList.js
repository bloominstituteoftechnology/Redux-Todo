import React from 'react';

const ToDoList = props => {
    return (
        <div>
            <input 
            type='text'
            value= {props.inputText}
            onChange={props.inputHandler}
            placeholder= 'Add To Do:'
            />
            <button onClick={props.addTodo}>Add</button>
            {props.list.map(todo => (<div key={todo.id}>{todo.value}</div>))}
        </div>
    );
};

export default ToDoList;