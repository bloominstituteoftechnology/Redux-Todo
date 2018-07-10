import React from "react";
import { connect } from "react-redux";
import { addTask } from "../actions/action";
import Todo from "./Todo";

class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.tasks.map(task => {
          return <Todo task={task} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  };
};

export default connect(
  mapStateToProps,
  { addTask }
)(TodoList);
