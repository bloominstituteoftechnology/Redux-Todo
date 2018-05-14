import React from 'react';
import Task from './Task'

const ToDoList = (props) => {
    return (
        <div className="to-do-list">
            {props.tasks.map((task, i) => {
                return <Task key={i} task={task}/>
            })}
        </div>
    )
}
 
export default ToDoList;