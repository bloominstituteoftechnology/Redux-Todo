import React from "react";
import { Box, CheckedBox } from "../assets";
import { connect } from "react-redux";
import { checkBox, clearCompleted, addItem } from "../actions/index";

class TodoList extends React.Component {
  clickHandler = e => {
    let item = e.target.id;
    if (!item){
        item = e.target.parentNode.id;
    }
    this.props.checkBox(item);
  };
  clearCompleted = e => {
    e.preventDefault();
    this.props.clearCompleted();
  };
  render() {
    let todos = this.props.todos;
  
    let anyCompleted = false
    if (todos && todos.map(x => x.completed).includes(true)){
        anyCompleted = true;
    };
    if (!todos) {return <div></div>}

    return (
      <div className="todo-list-items">
        {todos.map(todo => (
          <div
            key={todo.value}
            id={todo.value}
            className={todo.completed ? "todo red" : "todo"}
            onClick={this.clickHandler}
          >
            <div id={todo.value} className={todo.completed ? "none" : ""}>
              <Box id={todo.value}/>
            </div>
            <div id={todo.value} className={todo.completed ? "" : "none"}>
              <CheckedBox id={todo.value}/>
            </div>
            <h5 id={todo.value}>{todo.value}</h5>
          </div>
        ))}
        <button
          onClick={this.clearCompleted}
          className={anyCompleted ? "" : "none"}
        >
          Clear Completed
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { checkBox: checkBox, clearCompleted: clearCompleted , addItem:addItem}
)(TodoList);
