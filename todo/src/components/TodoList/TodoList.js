import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, todoCompleted } from '../../actions/actions';

class TodoList extends Component {
  state = {
    text: '',
  };
  //Handles change from input and stores in this.state
  handleInputChange = event => {
    this.setState({ text: event.target.value });
    // console.log(this.state);
  };

  //Submits action payload, resets state onSubmit
  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo({
      value: this.state.text,
      completed: false,
    });
    this.setState({
      text: '',
    });
  };

  render() {
    return (
      <div>
        {/* { this.props.todos.length > 0 ? console.log('something here') : console.log('nothing here')}
      {console.log(this.props.todos)} */}
        <ul>
          {this.props.todos.map((todo, i) => {
            return (
              <li key={i} index={i}>
                {todo.value}
              </li>
            );
          })}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleInputChange}
            value={this.state.text}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    todos: state,
  };
};
export default connect(mapStateToProps, { addTodo, todoCompleted })(TodoList);
