import React from "react";
import { connect } from "react-redux";
import { addTodo, toggleTodo } from '../store/actions';

class TodoListContainer extends React.Component {

	render() {
		return(
			<div>

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