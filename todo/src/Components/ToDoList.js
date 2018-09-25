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
            <Todo key={todo.id} text={todo.text} />
          ))}
        </div>
        <div className="todo-form">
          <form>
            <div className="new-todo container">
              <label for="new-todo">Add task here</label>
              <input name="new-todo" id="new-todo" />
            </div>
            <div className="add-todo">Add Task</div>
          </form>
        </div>
      </div>
    </section>
  );
};
const connectMyProps = state => ({
  todos: state.todos
});
export default connect(connectMyProps)(TodoList);
