// App.js is an aggregator of the components
// it is the top parent component that holds all other components
import React from 'react'
// import the Footer component
import Footer from './Footer'
// import AddTodo component
import AddTodo from '../containers/AddTodo'
// import VisibleTodoList component
import VisibleTodoList from '../containers/VisibleTodoList'

// instantiate the App component instance
const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />

  </div>
)

// export the App
// consumed by index.js (main)
export default App