import React, { Component } from 'react';
import { addTodoItem, markComplete } from './actions';
import { connect } from 'react-redux';
import { Container } from './styles'
import TodoList from './components/list/TodoList';
import TodoForm from './components/form/TodoForm';

class App extends Component {
  state = {
    newTodo: '',
  };

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = (event) => {
    event.preventDefault();
    this.props.addTodoItem(this.state.newTodo);
    this.setState({ newTodo: '' });
  };

  clickHandler = (todo) => {
    this.props.markComplete(todo.id)
  } 

  render() {
    return (
      <Container>
        <TodoList
          todos={this.props.todos}
          clickHandler={this.clickHandler}
        />
        <TodoForm
          changeHandler={this.changeHandler}
          submitHandler={this.submitHandler}
          text={this.state.newTodo}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    id: state.id,
  };
};

export default connect(
  mapStateToProps,
  { addTodoItem, markComplete }
)(App);
