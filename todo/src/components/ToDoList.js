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
            <input
              type="text"
              value={this.state.newItem}
              onChange={this.handleInputChanges}
              placeholder="Enter new todo item"
            />
            <button>Add</button>
          </form>
        </div>

        <div className="task-list">
          {this.props.items.map((item, index) => (
            <div key={index}>
              <h1>Task List</h1>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

export default connect(
  mapStateToProps,
  { addItem, toggleDone }
)(ToDoList);
