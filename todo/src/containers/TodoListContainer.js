import { connect } from "react-redux";
import TodoList from "../components/TodoList";

const mapStateToProps = state => ({
  todos: state
});

const TodoListContainer = connect(mapStateToProps)(TodoList);
