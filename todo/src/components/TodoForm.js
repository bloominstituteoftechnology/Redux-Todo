import React from "react";
import { connect } from "react-redux";

import { addTodo } from "../actions";

class TodoForm extends Component {
  state = {
    todo: ""
  };
  changeHandler  = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value})
}
click = event => {
  event.preventDefault();

   this.props.addTodo(this.state.todo);
  this.setState({ todo: "" });
};



  render() {
    return (
      <form className="form" onSubmit={this.click}>
      <input
        required
        type="text"
        name="todo"
        value={this.state.todo}
        onChange={this.changeHandler}
      />
      <button className="btn" onClick={this.click}>
        Add
      </button>
      </form>
    )
  }

  export default connect(? {addTodo})(TodoForm);;
