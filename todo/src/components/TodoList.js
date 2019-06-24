import React from "react";

//connecting react redux
import { connect } from "react-redux";

//import action toggleComplete
import { toggleComplete, deleteItem } from "../actions";

class TodoList extends React.Component {
  render() {
    return (
      <div className="container">
        {this.props.todos.map((item, index) => (
          <div key={index} className="todo-list">
            <div className="todo-list">
              <i
                className={` far ${
                  item.completed ? " fa-check-circle" : " fa-circle"
                }`}
                onClick={e => {
                  e.preventDefault();
                  console.log("Completed item:", index);
                  //passing the index to the action to toggle item
                  this.props.toggleComplete(index);
                }}
              />
              <h2 /* toggle class */
                className={`${item.completed ? " completed" : ""}`}
              >
                {item.value}
              </h2>
            </div>
            <span>
              <i
                className="fas fa-trash-alt"
                onClick={e => {
                  e.preventDefault();
                  console.log("Deleted item :", index);
                  //passing the index to the action to DELETE item
                  this.props.deleteItem(index);
                }}
              />
            </span>
          </div>
        ))}
      </div>
    );
  }
}

//bringing the state in the const todos
const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { toggleComplete, deleteItem }
)(TodoList);
