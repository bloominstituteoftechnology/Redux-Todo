import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '../actions';
import { filters } from '../actions';
import TodoList from '../components/TodoList';

const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = filters;

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos;
    case SHOW_COMPLETED:
      return todos.filter(({ completed }) => completed);
    case SHOW_ACTIVE:
      return todos.filter(({ completed }) => !completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const mapStateToProps = ({ todos, filter }) => ({
  todos: getVisibleTodos(todos, filter)
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  deleteTodo: id => dispatch(deleteTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
