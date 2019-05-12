import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import { toggleTodo } from "../actions";

// Recieve state for TodoList
const mapStateToProps = state => ({
  todos: state
});

// Pass toggleTodo (from actions) as prop toggleTodoOnClick
const mapDispatchToProps = dispatch => ({
  toggleTodoOnClick: toggleTodo
});

// Make this a smart component
// Connect data to presentational component TodoList
const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(
  TodoList
);

export default TodoListContainer;
