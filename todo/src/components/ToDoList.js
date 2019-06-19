import React from "react";
import { connect } from "react-redux";

import { addItem, toggleDone } from "../actions";

class ToDoList extends React.Component {
  state = {
    newItem: ""
  };

  handleInputChanges = e => {
    this.setState({
      newItem: e.target.value
    });
  };

  addItem = e => {
    e.preventDefault();
    this.props.addItem(this.state.newItem);
    this.setState({ newItem: "" });
  };

  toggleDone = (e, index) => {
    e.preventDefault();
    this.props.toggleDone(index);
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
          {this.props.todos.map((item, index) => (
            <p>{`${item} ${index}`}</p>
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
