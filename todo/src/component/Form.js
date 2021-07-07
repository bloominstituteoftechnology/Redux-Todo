import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {addTodoAction} from './actions'
import { connect } from "react-redux";

class Form extends Component {
  constructor(props) {
    super(props);
   this.state ={
     task: ''
   }
  }
   
  addtask  =(ev) => {
    ev.preventDefault();
  this.props.addTodoAction(this.state.task.payload)
  console.log(this.props.addTodoAction(this.state.task))
  }
 
  handleInputChange = e => {
    this.setState({ task: e.target.value });

  };

  render() {
    return (
      <div className="SmurfForm">
          <form className="form-inline" onSubmit={this.addtask}>
  <div className="input-group mb-2 mr-sm-2">
    <div className="input-group-prepend">
      <div className="input-group-text">Task:</div>
    </div>
    <input type="text" className="form-control" id="inlineFormInputName2" placeholder="Name"
            onChange={this.handleInputChange}
            value={this.state.task}
            name="task"
          />
  </div>

  <button type="submit" className="btn btn-primary mb-2"><FontAwesomeIcon className="add"
    icon="plus-circle" 
  /> </button>
</form>
      </div>
    );
  }
}
const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps,{addTodoAction})(Form );

