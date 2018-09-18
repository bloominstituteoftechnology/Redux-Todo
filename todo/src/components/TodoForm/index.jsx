import React from "react";
import { connect } from "react-redux";
import { handleInput, addTodo } from "../../actions";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleInputChange = e => {
    console.log(e.target.value);
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div>
        Todo Form
        <form>
          <input
            onChange={this.handleInputChange}
            placeholder="value"
            value={this.state.value}
            name="value"
          />
        </form>
        <button>Add Todo</button>
      </div>
    );
  }
}

export default TodoForm;
