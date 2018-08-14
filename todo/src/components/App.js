import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import Todo from './Todo'
​
const App = () => (
  <div>
    <AddTodo />
    <Todo />
    <Footer />
  </div>
)
​
export default App