import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import './App.css';

const App = () => (
  <div className="main-div">
    <h1 className="header">Welcome To Your TodoList</h1>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
