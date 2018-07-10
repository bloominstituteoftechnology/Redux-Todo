import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux';
import { addTodo as onClick } from '../actions/actions';
import Todo from './Todo';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
    this.onClick = this.onClick.bind(this);
  }
  onClick (event) {
    event.preventDefault();
    this.props.onClick(this.state.input);
  }
  onChange = event => {
    this.setState( {input: event.target.value} );
  }

  render() {
    const todos = this.props.todos.map( todo => (
      <Todo key={todo.id} {...todo} />
    ));

    return (
      <div>
        {todos}
        <form onSubmit={this.onClick}>
        <input type='text' value={this.state.input} onChange={this.onChange} placeholder='New todo'/>
        <input type='submit' value='Add Todo'/>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { todos: state.todos };
}

export default connect(mapStateToProps, { onClick })(TodoList);