import React from 'react'
import { connect } from 'react-redux'
import { addTodo, toggleTodo, deleteTodo } from './actions'
import Input from './components/Input'
import Todo from './components/Todo'
import { Container } from './styles/Global'

const mapStateToProps = ({ todos }) => ({
  todos
})

const App = ({ todos }) => (
  <Container>
    <h1>hello world</h1>
    <Input />
    {todos.map((todo, i) => <Todo key={i} {...todo} />)}
  </Container>
)

export default connect(
  mapStateToProps,
  { addTodo, toggleTodo, deleteTodo }
)(App)
