import React from 'react' 
import AddTodo from './components/AddTodoList';
import { connect } from 'react-redux';
import TodoList from './components/TodoList';

const App = (props) => {
  return (
    <div>
      <AddTodo {...props}/>
      <TodoList {...props}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    todos: state
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(App);