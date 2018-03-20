import React from 'react';

import { connect } from 'react-redux';

import TodoForm from './components/TodoForm';
import Todo from './components/Todo';

const App = () => {
    return (
      <div>
        <h1>Todo App</h1>
        <TodoForm />
        {this.props.todo.map((todo, index) => <Todo key={index} todo={todo}/>)}
      </div>
    );
  }

  const mapStateToProps = (state) => {
    return {
        todo: state
    };
};

export default connect(mapStateToProps)(App);
