import React from 'react';

const Todos = ({todos, deleteTodo}) => {

    const TodoList = todos.length ? (
        todos.map(todo => {
            return (
            <div className="collection-item" key={todo.id}>
                <span>{todo.content}</span>

                <i onClick={() => {deleteTodo(todo.id)}} className="fas fa-minus-circle" style={{float: 'right'}}></i>
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