import React from 'react';
import { connect } from 'react-redux';

const TodoList = props => {
  if (props.taskList.length > 0) {
    return (
      <ul className='todo-list'>
        {
          props.taskList.map((task, ind) => {
            return (
              <li
                key={ task.ID }
                // onClick={ () => alert(task.title) }
              >
                { task.title }
              </li>
            )
          })
        }
      </ul>
    )
  }
  else {
    return <h1>No Tasks</h1>;
  }
}

const mapStateToProps = state => {
  return { taskList: state };
}

export default connect(mapStateToProps)(TodoList);