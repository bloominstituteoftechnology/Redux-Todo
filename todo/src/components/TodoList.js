import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return(
        <div>
            {props.todos.map(todo => {
                return(
                    <div>
                        <Todo 
                            todo={todo.value}
                            key={todo.id}
                            id={todo.id}
                            toggleTodo={props.toggleTodo}
                            completed={todo.completed}
                        />
                    </div>
                )
            })}
        </div>
    )
}
export default TodoList; 