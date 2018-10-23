import React from 'react';
// import Footer from './Footer';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibileTodoList';
import Footer from '../src/components/Footer';


const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
