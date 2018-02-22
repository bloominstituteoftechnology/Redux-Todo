import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, removeTodo, toggleComplete, importState } from '../actions/todoActions';

class Todo extends Component {
   state = {
      value: '',
			completed: false,			 
  	}

	constructor(props) {
		super(props);
		this.props.importState();
	}	

  handleInput = (event) => {
		  this.setState({ value: event.target.value });
  }
 
addTodoHandler = (event) => {
	event.preventDefault();
	this.props.addTodo(this.state);
	this.setState({ value: '', completed: false });
};

removeHandler = (event) => {
	 this.props.removeTodo(event.target.getAttribute('id'));
}	

toggleHandler = (event) => {
    this.props.toggleComplete(event.target.getAttribute('id'));
}

render() {
		return (
				<div>
		      <h1>To do list</h1>
				   <form onSubmit={this.addTodoHandler}>
					<input id='input' onChange={this.handleInput} name='value' value={this.state.value}/>
					&ensp;
					<input type='submit' value='Add Task' onClick={this.addTodoHandler} />
        </form>
        <ul>
          {this.props.todos.map((todo, i) => {
            return (
							<div>	
              <li key={i} id={i} className={todo.completed ? 'todo-completed' : ''} onClick={this.toggleHandler}>
                {todo.value}
              </li>
							&ensp;
							<button key={i} id={i} onClick={this.removeHandler}>x</button>
							</div>
            );
          })}
        </ul>
      </div>
		);
  } 
} 
					
const mapStateToProps = (state) => {
	return {
      todos: state
	 };
}

export default connect(mapStateToProps, { addTodo, removeTodo, toggleComplete, importState })(Todo); 

