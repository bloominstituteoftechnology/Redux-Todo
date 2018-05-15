import React from 'react';
import Task from './Task';

const List = (props) => {
    return (
        <div className="list">
            {props.tasks.map((task, i) => {
                return <Task key={i} task={task} />
            })}
        </div>
    )
}
export default List;