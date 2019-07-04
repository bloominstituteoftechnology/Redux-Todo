import React from 'react';
import { Route } from 'react-router-dom';

import './index.css';
import TodoForm from './components/TodoForm';
import Login from './views/Login';

function App() {
  return (
    <div className='background-container'>
      <div className='application-container'>
        <h2
          style={{ fontSize: '3rem', marginRight: '1rem' }}
          className='display-3 mb-0 pt-md-5 pt-5 white-text font-weight-bold'>
          Redux Todo
        </h2>
        <Route exact path='/' render={props => <Login {...props} />} />
        <Route exact path='/todo' render={props => <TodoForm {...props} />} />
      </div>
    </div>
  );
}

export default App;
