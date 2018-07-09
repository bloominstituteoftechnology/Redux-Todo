import React from 'react'

const TodoList = props => {
    return (
        <div>
            {console.log('todolist', props)}
            {props.todos.map((todo, index) => {
                return (
                    <div className="todos" key={todo.value + index}>
                        {todo.value}
                        <button onClick={() => props.remove({ value: todo.value })} className="button button-delete" > X </button>
                    </div>)
            })}

        </div>
    );
};

export default TodoList;