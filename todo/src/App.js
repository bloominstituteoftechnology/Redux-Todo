import React from 'react';

import Todos from './components/Todos';
import TodoForm from './components/TodoForm';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Todos />
        <TodoForm />
      </>
    );
  }
}
