import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/index";

class NewTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ""
    };
  }

  handleChange = e => {
    this.setState({ task: e.target.value });
  };

  newTask = () => {
    this.props.addTodo(this.state.todo);
    this.setstate({ todo: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.newTodo}>
          <input
            name="todo"
            type="text"
            valaue={this.state.todo}
            onChange={this.handleChange}
          />
          <button>Add Todo</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(NewTodo);
