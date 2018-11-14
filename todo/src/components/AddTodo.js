import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
  }

  inputHandler = e => this.setState({ data: e.target.value });

  addHandler = e => {
    e.preventDefault();
    this.props.addTodo(this.state.data)
    // if (this.state.data !== "") {
    //   this.props.addTodo(this.state.data);
    //   this.setState({
    //     data: ""
    //   });
    // }
  };

  render() {
    return (
      <form>
        <input
          type="text"
          onChange={this.inputHandler}
          placeholder="...add todo"
          value={this.state.data}
          data={this.props.todos}
        />
        <button type="button" onClick={this.addHandler}>
          add todo
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return { todos: state.todos };
};

export default connect(
  mapStateToProps,
  { addTodo }
)(AddTodo);
