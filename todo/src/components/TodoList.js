import React from 'react' 
import Todo from './Todo';
import { toggleTodo, delteTodo } from '../actions';

const TodoList = ({ todos, dispatch }) => {
    return (
        <ul>
            {todos.map(todo => 
                <Todo 
                    key={todo.id}
                    { ...todo }
                    onClick={() => dispatch(toggleTodo(todo))}
                    onDelete={() => dispatch(delteTodo(todo))}
                />
            )}
        </ul>
    )
}

export default TodoList