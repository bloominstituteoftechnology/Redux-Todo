import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return(
            <ul>{props.todoList.map( (todo, index) => 
                <Todo   key={index}
                        todo={todo} 
                        handleTodoClick={(event) => props.handleTodoClick(event,index)}
                />
            )}</ul>
    );
}

export default TodoList;