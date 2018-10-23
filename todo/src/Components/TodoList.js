import React from 'react'
import './Styling/TodoList.css'

const TodoList = props => {
    return (
        <div>
            <h1>To Do List:</h1>
            {props.todosArray.map((eachTodo, index) => 
                <h4
                    onClick={props.toggleCompletion(index)}
                    className= {
                        eachTodo.completed
                            ? "complete"
                            : "incomplete"
                    }
                    key={index}
                >
                    {eachTodo.todo}
                </h4>
            )}
        </div>
    )
}

export default TodoList