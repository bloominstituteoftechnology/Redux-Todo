import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask, toggleCompleted } from './actions/index';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import { AppContainer, ListContainer, HeaderContainer } from './styles/App';

class App extends Component {
  render() {
    return (
      <AppContainer>
        <HeaderContainer></HeaderContainer>
        <ListContainer>
          <TodoForm addTask={this.props.addTask} />
          <TodoList listArray={this.props.store.listArray} toggleCompleted={this.props.toggleCompleted} />
        </ListContainer>
      </AppContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return { store: state };
};

export default connect(mapStateToProps, { addTask, toggleCompleted })(App);
