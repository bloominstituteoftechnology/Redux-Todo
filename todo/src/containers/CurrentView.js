import { connect } from "react-redux";
import { toggleTodo } from "../actions";
import TodoList from "../components/TodoList";
import { Filters } from "../actions";

const currentView = (todos, filter) => {
  switch (filter) {
    case Filters.SHOW_ALL:
      return todos;
    case Filters.SHOW_COMPLETED:
      return todos.filter(task => task.completed);
    case Filters.SHOW_ACTIVE:
      return todos.filter(task => !task.completed);
    default:
      return todos;
  }
};

const mapStateToProps = state => ({
  todos: currentView(state.todos, state.Filter)
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
