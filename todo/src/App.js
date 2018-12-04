import React, { Component } from "react";
import { addTodo } from "./actions";
import "./App.css";
import { connect } from 'react-redux';

class App extends Component {
	constructor() {
		super();
		this.state = {
			inputText: ""
		};
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	render() {
		return (
			<div className='App'>
				<header className='App-header'>
					<h1>Todo List</h1>

					<form
						onSubmit={(ev) => {
              ev.preventDefault();
              this.props.addTodo(Math.random(), this.state.inputText);
              this.setState({inputText: ''});
              
						}}>
						<input
							onChange={this.handleChange}
							type='text'
							name='inputText'
							placeholder='New Task'
							value={this.state.inputText}
						/>
						<button type='submit'>Add</button>
					</form>
				</header>
			</div>
		);
	}
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

const withState = connect(
  mapStateToProps,
  {
    
    addTodo // same as addFriend: addFriend
    
  }
);

const EnhancedApp = withState(App);

export default EnhancedApp;

//begin with actions: Object with a "type" key, and "payload" key
//add all the actions to the reducer
//export const store = crateStore(reducer)
