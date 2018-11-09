import React, { Component } from "react";
import { connect } from "react-redux";

class AddTodo extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text">...Add Todo</input>
          <button>submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(AddTodo);
