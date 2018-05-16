import React from 'react';
import { connect } from 'react-redux';

class TodoList extends React.Component {
  state = {
    taskList: [],
  };

  setTaskCompletionState = e => {
    const taskList = this.state.taskList.slice();

    for (let i = 0; i < taskList.length; i++) {
      if (taskList[e.target.dataset.index].completed === true ) {
        taskList[e.target.dataset.index] = Object.assign({}, taskList[e.target.dataset.index], { completed: false });
      }
      else {
        taskList[e.target.dataset.index] = Object.assign({}, taskList[e.target.dataset.index], { completed: true });
      }
    }
    
    this.setState({ taskList });
  }
  
  static getDerivedStateFromProps(newProps, oldState) {
    return {
      taskList: oldState.taskList.concat(newProps.taskList)
    };
  }

  render() {
    if (this.state.taskList.length > 0) {
      return (
        <ul className='todo-list'>
          {
            this.state.taskList.map((task, ind) => {
              return (
                <li
                  key={ task.ID }
                  data-index={ ind }
                  onClick={ this.setTaskCompletionState }
                  style={ (this.state.taskList[ind].completed) ? { textDecoration: 'line-through' } : { textDecoration: 'none' } }
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
}

const mapStateToProps = state => {
  return { taskList: state };
}

export default connect(mapStateToProps)(TodoList);