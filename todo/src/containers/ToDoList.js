import React from 'react';
import Todo from "./Todo.js";


const ToDoList = props => {

 let todoItemArray = props.toDoArray.map(item => {
    return <Todo completed = {item.completed} key={item.id} id={item.id} task={item.value}/>; 
   }   
);

return <div>
    <h1> ToDo List </h1>
    {todoItemArray}
    </div> 
 };

  
  export default ToDoList;
  
