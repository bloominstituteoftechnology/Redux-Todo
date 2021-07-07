import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return( 
            <ul>{props.todoList.map( (todo, index) => 
                <Todo   key={index}
                        todo={todo}
                        id={index} 
                        // handleTodoClick={(event) =>
                        //     props.handleTodoClick(event,index)}
                        handleRemoveTodo={(event) =>{
                            props.handleRemoveTodo(event, index)}}
                />
            )}</ul>
    );
}

export default TodoList;