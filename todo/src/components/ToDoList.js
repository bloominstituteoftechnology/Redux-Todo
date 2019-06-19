import React from "react";
import { connect } from "react-redux";

import { addItem, toggleDone } from "../actions";

class ToDoList extends React.Component {
  state = {
    todos: []
  };

  render() {
    return (
      <>
        <div className="add-item">
          <form>
            <input type="text" />
            <button>Add</button>
          </form>
        </div>

        <div className="task-list">
          {this.props.todos.map(item => (
            <p>{item}</p>
          ))}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todoList.items
  };
};

export default connect(
  mapStateToProps,
  { addItem, toggleDone }
)(ToDoList);
