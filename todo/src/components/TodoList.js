import React from 'react' ;
import Todo from './Todo';

 const TodoList = (props) => {
    return (
        <div className = "todoList">
            <ul>
            {props.todoData.map((item, index) => {
                   return <Todo  onClick = {() => props.toggle(item.id)} todoItem = {item.task} key = {item.id} />
                })}
            </ul>
        </div>
    )
}
 export default TodoList;