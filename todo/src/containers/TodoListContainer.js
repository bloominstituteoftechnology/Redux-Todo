import React from "react";
import { connect } from "react-redux";
import { addTodo, toggleTodo } from '../store/actions';
import TodoList from '../components/todoList/TodoList';
import TodoInput from '../components/todoList/TodoInput';

class TodoListContainer extends React.Component {

	state = {
		todoInputText: ''
	};

	onChange = e => {
		e.preventDefault();
		this.setState({
			todoInputText: e.target.value
		});
	};

	addNewTodo = () => {
		this.props.addTodoOnProps(this.state.todoInputText);
		this.setState({ todoInputText: '' });
	};

	toggleCompleted = index => {
		this.props.toggleTodo(index);
	};

	render() {
		return(
			<div>
				<TodoInput 
					addTodo={this.addNewTodo}
					inputText={this.state.todoInputText}
					onInputChange={this.onChange}
				/>
				<TodoList todos={this.props.todosOnProps} toggleCompleted={this.toggleCompleted} />
			</div>
		)
	}
}

const mapStateToProps = state => ({
	todosOnProps: state.todos
});

export default connect(
  mapStateToProps, { addTodoOnProps: addTodo, toggleTodo }
)(TodoListContainer);