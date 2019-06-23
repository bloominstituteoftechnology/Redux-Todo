import React from "react";

//connecting react redux
import { connect } from "react-redux";

//import action toggleComplete
import { toggleComplete } from "../actions";

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((item, index) => (
          <li
            /* toggle class */
            className={`item${item.completed ? " completed" : ""}`}
            key={index}
            onClick={e => {
              e.preventDefault();

              console.log("index clicked:", item.completed);
              //passing the index to the action to toggle item
              this.props.toggleComplete(index);
            }}
          >
            {item.value}
          </li>
        ))}
      </ul>
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
  { toggleComplete }
)(TodoList);
