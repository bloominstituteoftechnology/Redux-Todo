import React from "react";
import { Box, CheckedBox } from "../assets";
import { connect } from "react-redux";
import {checkBox} from '../actions/index'

class TodoList extends React.Component {
  clickHandler = e => {
    let item = e.target.parentNode.id;
    this.props.checkBox(item)
  };
  render() {
    return (
      <div className="todo-list-items">
        {this.props.todos.map(todo => (
          <div
            key={todo.value}
            id={todo.value}
            className={todo.completed ? "todo red" : "todo"}
            onClick={this.clickHandler}
          >
            <div className={todo.completed ? "none" : ""}>
              <Box />
            </div>
            <div className={todo.completed ? "" : "none"}>
              <CheckedBox />
            </div>
            <h5>{todo.value}</h5>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, {checkBox:checkBox})(TodoList);
