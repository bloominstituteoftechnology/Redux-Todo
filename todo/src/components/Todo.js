import React from 'react';
import PropTypes from 'prop-types';

// export const ToDoList = (props) => {
//     return (
//         <ul>
//             {props.list.map(todos => <li key={todos.todo}>{todos.todo}</li>)}
//         </ul>
//     )
// }

// export default ToDoList;

const Todo = ({ onClick, completed, text}) => (
    <li onClick={onClick} style={ {textDecoration: completed ? 'line-through' : 'none'} 
    }
    >
    {text}
    </li>
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo;