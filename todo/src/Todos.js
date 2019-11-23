import React from 'react';

const Todos = ({todos, deleteTodo, toggleComplete}) => {

    const TodoList = todos.length ? (
        todos.map(todo => {
            return (
            <div className="collection-item" key={todo.id} style={{textDecoration: todo.complete ? 'line-through' : ''}} >
                <span>{todo.content}</span>
                <i onClick ={() => {toggleComplete(todo.id)}} className="fas fa-check-circle" style={{float: 'right', cursor:'pointer'}}></i>

                <i onClick={() => {deleteTodo(todo.id)}} className="fas fa-minus-circle" style={{float: 'right', cursor: 'pointer'}} ></i>   
            </div>
        )
     })
    ) : (
        <p className="center">You have no todos left!</p>
    );

    return (
        <div className= "Todos collection">
            {TodoList}
        </div>
    )
}

export default Todos;