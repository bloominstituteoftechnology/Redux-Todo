import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, todoCompleted } from '../../actions/actions';

class TodoList extends Component {
  state = {
    todo: '',
  };
  handleInputChange = event => {
    this.setState({ todo: event.target.value });
    console.log(event.target.value);
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map((todo, i) => {
            return <li key={i}>{todo}</li>;
          })}
        </ul>
        <form onSubmit={this.props.addTodo}>
          <input onChange={this.handleInputChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    todos: [state],
  };
};

export default connect(mapStateToProps, { addTodo, todoCompleted })(TodoList);
