import React from 'react';

const TodoList= props => {
    
    return (
        
        <div>
           {props.items.map(todo => {
                return (
                    <div
                        // onClick={() => this.handleTodoComplete(todo.id)}
                        // style={
                        //     todo.completed
                        //     ? { color: '#d3d3d3', textDecoration: 'line-through' }
                        //     : null
                        // }
                        key={todo.id}
                    >
                    {todo.item}
                    </div>
            
                );
            })}
        </div>
    );
};

export default TodoList;