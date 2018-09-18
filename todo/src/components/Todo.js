import React from 'react'; 

 const Todo = (props) => {
    return (
        <div className = "todo">
            <li>{props.todoItem}</li>
        </div>
    )
}
 export default Todo; 