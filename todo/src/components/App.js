import React from 'react';
import './App.css';

import AddTodo from '../containers/AddTodo';
import VisibileTodoList from '../containers/VisibileTodoList';
import Footer from './Footer';

const App = () => (
  <div>
    <AddTodo />
    <VisibileTodoList />
    <Footer />
  </div>
)

export default App;
