import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TooList';
import { VisibilityFilters } from '../actions';


const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_COMPLETED':
            return todos.filter(todo => todo.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(todo => !todo.completed)
        default:
        throw new Error ('Unknown filter: ' + filter)

    }
}

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.VisibilityFilter)
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)