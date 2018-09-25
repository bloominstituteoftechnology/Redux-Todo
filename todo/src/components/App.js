import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/visibleTodoList'
import logo from '../logo.svg'
import '../index.css'

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App;
