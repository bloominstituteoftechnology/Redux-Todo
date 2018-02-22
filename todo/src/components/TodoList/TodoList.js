import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, todoCompleted } from '../../actions/actions';

class TodoList extends Component {
  state = {
    text: '',
  };
  handleInputChange = event => {
    this.setState({ text: event.target.value });
    console.log(this.state);
  };
  handleSubmit = event => {
    event.preventDefault();    
    this.props.addTodo(this.state.text);
  };
  render() {
    return (
      <div>
      { this.props.todos.length > 0 ? console.log('something here') : console.log('nothing here')}
        <ul>
          {this.props.todos.map((todo, i) => {
            return <li key={i}>{todo}</li>;
          })}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleInputChange}/>
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
