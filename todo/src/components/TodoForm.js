import React from 'react';
import { addTodo, toggleTodoStatus, deleteTodo, loadTodos } from '../actions';
import { connect } from 'react-redux';
import TodoList from './TodoList';
import { Redirect } from 'react-router-dom';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      todos: [],
    };
  }

  componentDidMount() {
    this.props.loadTodos();
  }

  addTodo = event => {
    event.preventDefault();
    if (this.state.text.length > 0) {
      this.props.addTodo({
        text: this.state.text,
        status: false,
        user: localStorage.getItem('user'),
      });
      /* window.location.reload(); */
    }
  };

  deleteATodo = id => {
    this.props.deleteTodo(id);
    this.setState({ todos: this.props.todoProps });
    /* window.location.reload(); */
  };

  toggleTodo = id => {
    this.props.toggleTodoStatus({
      _id: id,
      status: !this.props.todoProps.filter(todo => todo._id === id)[0].status,
    });
    this.setState({ todos: this.props.todoProps });
    /* window.location.reload(); */
  };

  onInputChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  render() {
    if (localStorage.getItem('user') === null) {
      return <Redirect to='/' />;
    }
    return (
      <div className='form-container'>
        <form className='md-form' onSubmit={this.addTodo}>
          <input
            type='text'
            name='text'
            value={this.state.text}
            onChange={this.onInputChange}
            id='exampleForm2'
            className='form-control white-text'
            autoComplete='off'
          />
          <button className='btn peach-gradient' type='submit'>
            Add
          </button>
        </form>
        <TodoList toggle={this.toggleTodo} delete={this.deleteATodo} />
      </div>
    );
  }
}

const mapStateToProps = state => ({ todoProps: state.todoReducer.todos });

export default connect(
  mapStateToProps,
  { addTodo, toggleTodoStatus, deleteTodo, loadTodos },
)(TodoForm);
