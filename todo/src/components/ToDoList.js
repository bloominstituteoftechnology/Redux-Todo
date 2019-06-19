import React from "react";
import { connect } from "react-redux";

import { addNewItem, toggleDone } from "../actions";

class ToDoList extends React.Component {
  state = {
    item: {
      description: "",
      completed: ""
    }
  };

  handleInputChanges = e => {
    this.setState({
      item: {
        description: e.target.value
      }
    });
  };

  addItem = e => {
    e.preventDefault();
    const newItem = {
      description: this.state.item.description,
      completed: false
    };
    this.props.addNewItem(newItem);
    this.setState({
      item: {
        description: "",
        completed: ""
      }
    });
  };

  toggleDone = (e, index) => {
    e.preventDefault();
    this.props.toggleDone(index);
  };

  render() {
    return (
      <>
        <div className="add-item">
          <form onSubmit={this.addItem}>
            <input
              type="text"
              name="newItemInput"
              value={this.state.item.description}
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
  { addNewItem, toggleDone }
)(ToDoList);
