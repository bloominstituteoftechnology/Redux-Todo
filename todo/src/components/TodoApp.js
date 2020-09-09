import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { addTask, toggleComplete, clearCompleted } from '../actions';

const GlobalStyle = createGlobalStyle`
${reset}
html {
  font-size: 62.5%;
}
body {
  margin: 0;
  padding: 25%;
  background: #000000;
}
`;

class TodoApp extends Component {
	constructor() {
		super();
		this.state = {
			inputText: ''
		};
	}

	handleChange = (event) => {
		this.setState({ 
      [event.target.name]: event.target.value, 
    });

	};

	handleAddTask = (event) => {
		event.preventDefault();
    this.props.addTask(this.state.inputText);
    this.setState({
      inputText: ''
    })
  };
  
  toggleComplete = index => {
    this.props.toggleComplete(index)
  }

  clearCompleted = event => {
    event.preventDefault();
    this.props.clearCompleted()
  }

	render() {
		return (
			<React.Fragment>
				<GlobalStyle />
        <TodoList 
        list={this.props.todoList}
        toggleComplete={this.toggleComplete}
        complete={this.props.complete}
        />
				<TodoForm
					addTask={this.handleAddTask}
					inputText={this.state.inputText}
          handleChange={this.handleChange}
          clearCompleted={this.clearCompleted}
				/>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => ({
	todoList: state.todoList
});

export default connect(
	mapStateToProps,
	{ addTask, toggleComplete, clearCompleted }
)(TodoApp);
