import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions';

class TodoForm extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      completed: false
    }
  }
  inputHandler = (e) => {
    this.setState({value: e.target.value, completed: false})
  }
  submitHandler = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    return this.setState({value: ''})
  }
  render() {
    return (
      <form onSubmit={this.submitHandler} >
        <input type='text' name='todo' onChange={this.inputHandler}/>
        <button type='submit'>
          Add Todo
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state
  }
}

export default connect(mapStateToProps, { addTodo })(TodoForm);
