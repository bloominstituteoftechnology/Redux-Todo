import React from 'react';

const TodoForm = (props) => {
    return(
        <div className="todo-form">
            <form onSubmit={props.onChangeHandler}>
                <input
                    type="text" 
                    placeholder="add new todo"
                    value = {props.inputText}
                    onChange = {props.onChangeHandler}
                />

                <input type="submit" onClick={props.onSubmit} />
            </form>
        </div>
    )
}

export default TodoForm;