import React from 'react';
import './Todo.css';



const TodoForm = props => {
    console.log("Form  :  ",props);
    return (
        <form className = "form-display">
            <div>
                <input
                    onChange = {props.handleTodoChange}
                    type = "text"
                    name = "todos"
                    value = {props.value}
                    placeholder = "...todo task"
                />
            </div>

            <div >
                <button onClick = {props.addTodo}> Add Todo </button>
                {" "}
                <button onClick = {props.clearTodos}> Clear Completed </button>
            </div>
        </form>
    );
};

export default TodoForm;