import React from 'react';

const TodoList = (props) => {
    return(
        <div className="todo-list">
            <h1>To-do List</h1>
            <ul>
                {
                    props.todoList.map((item,index) => {
                        return <li key={index} onClick={() => console.log("item clicked :",{index})}>{item.value}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default TodoList;