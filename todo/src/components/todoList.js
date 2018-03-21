import React, { Component } from 'react';

const TodoList = () => {
    return (
        <div>
            {this.props.todos.map(todo => {
                return (
                    <div>
                        <div>
                            {todo.text}
                        </div>
                        <button onClick={() => this.handleDelete(todo.id)}>Delete</button>
                    </div>
                )
            })}
        </div>
    );
}

export default TodoList;