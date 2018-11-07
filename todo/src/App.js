import React, { Component } from 'react';

import './App.css';
import ToDos from './components/ToDos';
import ToDoForm from './components/ToDoForm';
import { connect } from 'react-redux';
import { addToDo } from './actions';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			toDoText: '',
		};
	}

	inputHandler = event => {
		this.setState({ [event.target.name]: event.target.value });
	}

	addTodo = () => {
		const { toDoText } = this.state;
		const newToDo = {
			id: this.props.toDos.length + 1,
			completed: false,
			text: toDoText,
		};
		this.props.addToDo(newToDo);
		this.setState({ toDoText: '' });
	};

	render() {
		return (
			<div className="App">
				<ToDoForm inputHandler={this.inputHandler} toDoText = {this.state.toDoText} addToDo = {this.addToDo} />
				<ToDos toDos ={this.props.toDos} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { 
		toDos: state.toDos,
	};
};
export default connect(mapStateToProps, {addToDo})(App);
