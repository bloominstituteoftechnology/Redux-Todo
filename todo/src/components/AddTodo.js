import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, completeTodo } from '../actions';

class AddTodo extends Component {
// set state to null
  state = {
    newTodo:''
  };

// set state to newTodo  
 handleTodo = event => {
   this.setState({ newTodo: event.target.value });

  };

// upon submitting, this takes the newTodo and puts it into state
 handleSubmit = event => {
    this.props.addTodo(this.state.newTodo);
    this.setState({ newTodo: ''});
  };


// this takes marks items as completed
  toggleComplete = event => {
    this.props.toggleComplete(event.target.id);
  };

  render() {
    return (
      <div>
	<input onChange={this.handleChange}
	       placeholder="add task"
	       value={this.state.newTodo}
	       />
	<button onClick={this.handleSubmit}>Submit</button>
	<ul>
	  {this.props.todo.map(item => {
	    return (
	      <li onClick={this.toggleComplete} key={item.id} id={item.id}>{item.value}</li>
	    );
	  })}
      </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todo: state
  };
};

export default connect(mapStatetoProps, { addTodo, completeTodo })(AddTodo);
//I do not really understand mapStateToProps very well and basically stole this from the redux documentation and other online sources.
