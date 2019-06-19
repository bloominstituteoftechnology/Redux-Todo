import React, { Component } from 'react';
import { connect } from 'react-redux';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import { addItem, removeCompleted } from './actions';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <ToDoForm
          {...this.props}
          addItem={addItem}
          removeCompleted={removeCompleted}
        />
        <ToDoList todoList={this.props.todoList} />
      </div>
    );
  }
}

const noStateConnect = connect(null);
const HOC = noStateConnect(App);

export default HOC;
