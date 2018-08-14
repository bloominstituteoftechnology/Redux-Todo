import React from 'react' 
import Todo from './Todo';
import { toggleTodo } from '../actions';

const TodoList = ({ todos, dispatch }) => {
    return (
        <ul>
            {todos.map(todo => 
                <Todo 
                    key={todo.id}
                    { ...todo }
                    onClick={() => dispatch(toggleTodo(todo))}
                />
            )}
        </ul>
    )
}

export default TodoList