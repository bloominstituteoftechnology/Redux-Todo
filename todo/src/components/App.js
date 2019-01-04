import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, markFinished, deleteTodo } from '../actions';
import TodoList from './TodoList';
import TodoInput from './TodoInput';

class App extends Component {
  componentDidMount(){
    console.log(this.props);
  }
  render() {
    return (
      <div className="App">
        <TodoInput 
          addTodo={this.props.addTodo}
        />
        <TodoList 
          todos={this.props.todos}
          markFinished={this.props.markFinished}
          deleteTodo={this.props.deleteTodo}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
  }
}

export default connect(mapStateToProps, { addTodo, markFinished, deleteTodo })(App);