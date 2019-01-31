import React from "react";
import { connect } from "react-redux";

import { addTodo } from "./actions";

class TodoForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        inputText: ''
    }
  }


changeHandler  = event => {
  event.preventDefault();
  this.setState({ [event.target.name]: event.target.value})
}
click = event => {
  event.preventDefault();
  this.props.addTodo(this.state.inputText);
  this.setState({ inputText: "" });
};



  render() {
    return (
      <form className="todoForm" onSubmit={this.click}>
      <input
        required
        type="text"
        name="inputText"
        value={this.state.inputText}
        placeholder='ADD ITEM'
        onChange={this.changeHandler}
      />
      <button className="button" onClick={this.click}>
        Add Todo
      </button>
      </form>
    )
  }
}
const mapStateToProps = state => {
  return { todos: state.todos }
}

export default connect(mapStateToProps, { addTodo })(TodoForm)
