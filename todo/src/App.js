import React, { Component } from 'react';
import { addTodoItem, markComplete, clearCompleted } from './actions';
import { connect } from 'react-redux';
import { Container, StyledHeader } from './styles';
import TodoList from './components/list/TodoList';
import TodoForm from './components/form/TodoForm';

class App extends Component {
  state = {
    newTodo: '',
  };

  // componentDidMount = () => {
  //   localStorage.getItem()
  // }

  // componentWillReceiveProps(newProps) {
  //   localStorage.setItem('todos', JSON.stringify(newProps.todos))
  // }

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = (event) => {
    event.preventDefault();
    if (this.state.newTodo.length > 0) {
      this.props.addTodoItem(this.state.newTodo);
      this.setState({ newTodo: '' });
      console.log(this.props);
    }
  };

  clickHandler = (todo) => {
    this.props.markComplete(todo.id);
  };

  clearHandler = (event) => {
    event.preventDefault();
    this.props.clearCompleted();
  }

  render() {
    return (
      <Container>
        <StyledHeader>Todo List</StyledHeader>
        <TodoList todos={this.props.todos} clickHandler={this.clickHandler} />
        <TodoForm
          changeHandler={this.changeHandler}
          submitHandler={this.submitHandler}
          clearHandler={this.clearHandler}
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
  { addTodoItem, markComplete, clearCompleted }
)(App);
