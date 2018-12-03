import React from 'react';
import Footer from './components/Footer';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Welcome to Redux</h1>
    </header>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
