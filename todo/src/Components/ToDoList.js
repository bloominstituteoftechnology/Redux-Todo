import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { todoAdd, todoComplete, todoDelete } from "../Actions";
const TodoList = props => {
  return (
    <section className="todo-list">
      <div className="container">
        <div className="todos">
          {props.todos.map(todo => (
            <Todo
              complete={props.todoComplete}
              key={todo.id}
              text={todo.text}
            />
          ))}
        </div>
        <div className="todo-form">
          <form>
            <div className="new-todo container">
              <label htmlFor="new-todo">Add task here</label>
              <input type="text" name="new-todo" id="new-todo" />
            </div>
            <div
              className="add-todo todo-button"
              onClick={() => props.todoAdd("New Todo")}
            >
              Add Task
            </div>
          </form>
          <div
            className="remove-todo todo-button"
            onClick={() => props.todoDelete()}
          >
            Remove Task
          </div>
        </div>
      </div>
    </section>
  );
};
const connectMyProps = state => ({
  todos: state.todos
});
export default connect(
  connectMyProps,
  { todoAdd, todoComplete, todoDelete }
)(TodoList);
