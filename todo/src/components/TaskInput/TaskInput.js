import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../../actions';

class TaskInput extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      newTask: ''
     }
  };
  handleOnChange = event => {
    this.setState({ [event.target.name]:event.target.value });
  };
  addTaskOnClick = () => {
    this.props.addTask(this.state.newTask);
    this.setState({ newTask:'' });
  };
  render() { 
    return ( 
      <div>
        <input
          name="newTask"
          type="text"
          placeholder="Add a task"
          value={this.state.newTask}
          onChange={this.handleOnChange}
         />
         <button onClick={this.addTaskOnClick}>Add</button>
      </div>
     )
  }
}
 
export default connect(null, { addTask })(TaskInput);