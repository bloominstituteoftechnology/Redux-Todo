import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '../actions';
import { filters } from '../actions';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case filters.SHOW_ALL:
      return todos;
    case filters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case filters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.filter)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleTodo: id => dispatch(toggleTodo(id)),
    deleteTodo: id => dispatch(deleteTodo(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
