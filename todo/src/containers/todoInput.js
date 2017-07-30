import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo } from '../actions';


class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.todo = '';
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.todo = event.target.value;
    //console.log(this.todo);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.addTodo(this.todo);
    //this.todo = '';
  }

  render() {
    return (
      <div>
        <form onSubmit ={this.handleSubmit} name='todoForm'>
        <input onChange={this.handleChange}></input>
        <button type='submit'>Submit</button>
        </form>
        <ul> 
          {this.props.todo.map((todo) => {
          return <li key={todo.id}>{todo.todo}</li>
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {todo: state.todo};
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { addTodo: addTodo,
    },dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);