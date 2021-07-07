import React from 'react';
import Todo from './Todo'
const TodoList = (props) => {
    return (  
        <div>
            {props.todos.map(todos => {
          return (
            <Todo todos={todos.task}/>
          );
        }
      )} 
        </div>

    );
}
 
export default TodoList;