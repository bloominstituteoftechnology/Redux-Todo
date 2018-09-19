import React from 'react'

const TaskList = (props) => {
  return (
    <div>
      <input type="text" value={props.tskipt} onChange={props.handleChange} />
      <button onClick={props.tskad}>Add Task</button>
      <ul>
          {props.tsklst.map((task, index) => (<li onClick={() => props.tsktgl(index)} key={index}>{task.task}</li>))}
      </ul>
    </div>
  )
}

export default TaskList;
