import React from 'react';
import AddTodo from '../containers/AddTodo';
import RenderedList from '../containers/RenderedList'

const App = () => (
  <div>
    <AddTodo />
    <RenderedList />
  </div>
)

export default App;