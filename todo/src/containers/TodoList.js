import React from "react";
import Todo from "./Todo";
import "./Todo.css";
import { connect } from "react-redux";
import { completeTodo } from "../actions/action";

class TodoList extends React.Component {
  clickHandler = (event, id) => {
    event.preventDefault();
    this.props.completeTodo(id);
    if (event.target.classList.contains("strikethrough")) {
      event.target.classList.remove("strikethrough");
    } else {
      event.target.classList.add("strikethrough");
    }
  };
  render() {
    return (
      <div className="list">
        {this.props.tasks.map(task => {
          return (
            <Todo
              clickHandler={this.clickHandler}
              item={task.todo}
              id={task.id}
            />
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { tasks: state.todos };
};
export default connect(
  mapStateToProps,
  { completeTodo }
)(TodoList);
