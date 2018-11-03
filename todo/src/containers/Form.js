import React from "react";
import "./Todo.css";
import { connect } from "react-redux";
import { addTodo } from "../actions/action";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }
  changeHandler = event => {
    const value = event.target.value;
    this.setState({
      input: value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.addTodo(this.state.input);
    this.setState({
      input: ""
    });
  };

  render() {
    return (
      <div className="todo-form">
        <div className="input">
          <input
            type="text"
            value={this.state.input}
            onChange={this.changeHandler}
          />
        </div>
        <div className="buttons">
          <button type="submit" className="button" onClick={this.submitHandler}>
            Add Task
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  { addTodo }
)(TodoForm);
