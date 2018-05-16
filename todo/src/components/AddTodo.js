import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from '../actions';

//Ok, a lot of stuff happens in this file:

class AddTodo extends Component {
// set state to null
  state = {
    newTodo:''
  };

// all this stuff is react, and works the same as in my react-todo list  
 handleTodo = event => {
   this.setState({ newTodo: event.target.value });

  };

 handleSubmit = event => {
    this.props.addTodo(this.state.newTodo);
    this.setState({ newTodo: ''});
  };


  render() {
    return (
	<div>

	<input onChange={this.handleTodo}
	       placeholder="add task"
	       name="newTodo"
	       value={this.state.newTodo}
	       />
       <button onClick={this.handleSubmit}>Submit</button>
	       
       {/*This is the map that goes over each item and displays it as a todo on the screen. It refers to the action toggleTodo so that if the user clicks on the item it will be toggled as complete. Style draws a line through it so that this process will be visible.*/}
  
      <ul>
	  {this.props.myTodo.map((item, index) => {
	    return (
	      <li onClick={() => this.props.toggleTodo(item.id)}
		key={index}
		style={item.complete ? {textDecoration: 'line-through'} : null}>
		{item.todo}
	      </li>
	    );
	  })}
      </ul>
      </div>
    );
  }
}
//Here we have our mapStateToProps and connect.

const mapStateToProps = state => {
  return {
    myTodo: state
  };
};

export default connect(mapStateToProps, { addTodo, toggleTodo })(AddTodo);
//I cobbled this together from the redux documentation and other online sources. This part links the react component here to the store containing the defined actions. mapStateToProps specifies which state the component specifically wants.
