import React from 'react'

const TodoList = props => {
    return (
        <div>
            {console.log('todolist', props)}
            {props.todos.map((todo, index) => {
                return (
                    <div onClick={() => props.complete({ value: todo.value })} className="smurfs" key={todo.value + index}>
                        <span className={todo.complete? "task completed" : "task"} > {todo.value} </span>
                        <button onClick={() => props.remove({ value: todo.value })} className="button button-delete" > X </button>
                    </div>)
            })}

        </div>
    );
};

export default TodoList;