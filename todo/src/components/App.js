import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import '../styles/App.css';

const App = () => (
  <div className="App">
    <h1 className="title">Todo List</h1>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App