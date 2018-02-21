import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const mapStateToProps = (state) => ({
  todos: state
})

const mapDispatchToProps = {
  onTodoClick: toggleTodo
}

const RenderedList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default RenderedList
