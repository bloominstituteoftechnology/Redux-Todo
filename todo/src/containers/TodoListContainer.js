import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleComplete } from '../actions/todoActions';

class Todo extends Component {
state = {
      value: '',
  	}

  handleInput = (event) => {
		  this.setState({ [event.target.name]: event.target.value });
}
 
addTodoHandler = (event) => {
	const { value } = this.state;
	const todo = {
		value,
		completed: false,
	};
	  this.props.addTodo(todo);
};

 render() {
		return(
				<div>
		      <h1>To do list</h1>	
          <form>
					  <input onChange={this.handleInput} name='value' value={this.state.value}/>
						 <button onSubmit={() => this.addTodoHandler()}>Add Task</button>
						</form>
					</div>	
			);
   } 
}


const mapStateToProps = (state) => {
	return {
      todos: state
	 };
}

export default connect(mapStateToProps, { addTodo, toggleComplete })(Todo); 

