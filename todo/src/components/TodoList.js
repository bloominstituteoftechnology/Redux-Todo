import React from 'react';
import Task from './Task';

export default function TodoList(props) {
    return (
        <div className="todo-list">
            {props.tasks.map((task, index) =>
                <Task 
                    task={task.value} 
                    completed={task.completed}
                    key={index} 
                    id={index} 
                    toggleCompleted={props.toggleCompleted}
                    deleteTask={props.deleteTask}
                />)}
        </div>
    );
}