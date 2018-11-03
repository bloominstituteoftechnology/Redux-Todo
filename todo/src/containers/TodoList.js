import React from "react";
import { connect } from "react-redux";
import { completeTodo } from "../actions/action";

class TodoList extends React.Component {
  clickHandler = id => {
    this.props.completeTodo(id);
  };
  render() {
    return (
      <div className="list">
        {this.props.tasks.map(task => {
          return (
            <li className="list-item" onClick={this.clickHandler} key={task.id}>
              {task.todo}
            </li>
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
