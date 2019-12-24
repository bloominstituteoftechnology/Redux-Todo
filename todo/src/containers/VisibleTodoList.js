import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';
import { VisibilityFilters } from '../actions';

// action-creator, takes in two arguments - todos (state?) and filter - where is filter coming from?
const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

// mapStateToProps and mapDispatchToProps is the heart of redux, right? It allows communication with the Redux Store by passing in objects
// where is visibilityFIlter, lowercase, coming from?
const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})

// connecting these two functions with TodoList
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)