import React, { Component } from 'react';
import { connect } from 'react-redux';


class TodoList extends Component {
  state = {
    todo: '', 
  }
  handleInputChange = event => {
    this.setState({ todo: event.target.value });
  };
  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map(todo => {
            return <li>{todo}</li>
          })}
        </ul>
        <input onChange={this.handleChange} />
        <button>Submit</button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    todos: [state],
  };
};

export default connect(mapStateToProps)(TodoList);
