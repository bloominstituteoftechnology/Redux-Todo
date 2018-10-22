import React from 'react';

const TodoForm = () => {
    return(
        <div className="todo-form">
            <form>
                <input type="text" placeholder="add new todo"/>
                <input type="submit" />
            </form>
        </div>
    )
}

export default TodoForm;