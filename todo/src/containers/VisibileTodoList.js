import { connect } from 'react-redux';
import { toggleTodo, TOGGLE_COMPLETE  } from '../actions';
import TodoList from '../components/TodoList';
import { VisibilityFilters } from '../actions';

const getVisibleTodos = props => {
  switch (props.filter) {
    case VisibilityFilters.SHOW_ALL:
      return props.todos
    case VisibilityFilters.SHOW_COMPLETED:
      return props.todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return props.todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + props.filter)
  }
}

// export default getVisibleTodos;

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleComplete: id => dispatch(toggleComplete(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
