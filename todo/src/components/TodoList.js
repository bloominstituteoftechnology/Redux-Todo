import React from 'react';


const TodoList = props => { 
    console.log(props.todo);
    return (
        <div className = "ListContainer">
            {props.todo.map((item,index) => {
                return (
                    <p onClick={() => props.changeCompleted(index)}>{item.value}</p>
                );
            })}
        </div>
    );
}

export default TodoList;