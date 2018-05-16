import React, { Component } from 'react';
import { connect } from 'react-redux';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';

import { addTask } from '../../actions';

import './TaskInput.css';

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
    if(this.state.newTask !== ''){
      this.props.addTask(this.state.newTask);
      this.setState({ newTask: '' });
    }
  };
  render() { 
    return ( 
      <div className="TaskInput">
      <InputGroup>
        <InputGroupAddon className="add-task-symbol" addonType="prepend"><i className="fas fa-plus"></i></InputGroupAddon>
        <Input
          name="newTask"
          type="text"
          placeholder="Add a task"
          value={this.state.newTask}
          onChange={this.handleOnChange}
        />
        <button onClick={this.addTaskOnClick}>Add</button>
      </InputGroup>
      </div>
     )
  }
}
 
export default connect(null, { addTask })(TaskInput);