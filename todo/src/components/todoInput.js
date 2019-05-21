import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

class TodoInput extends Component {
	state = {
		todo: ""
	};

	handleInputChange({ target }) {
		this.setState({
			todo: target.value
		});
	}

	handleSubmit() {
		this.props.addTodo(this.state.todo);
		this.setState({
			todo: ""
		});
	}

	render() {
		return (
      <div>
					<label>Todo Input: </label>
					<input
            onChange={(event) => this.handleInputChange(event)}
            value={this.state.todo}
          />
          <button onClick={() => this.handleSubmit()}>Add Todo</button>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		todos: state.todos
	};
};

export default connect(mapStateToProps, { addTodo })(TodoInput);

// export default connect(mapStateToProps, { openDoor: open, closeDoor: close })(
//   Controls
// );
