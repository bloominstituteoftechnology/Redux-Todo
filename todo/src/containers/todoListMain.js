import React, { Component } from 'react';
import ShowTodo from './ShowTodo';
import {addTodo, toggleComplete} from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class TodoListMain extends Component {
  //Create Constructor
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    }
  
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      value: ''
    });
    this.props.addTodo(this.state.value);
  }
  
  handleToggle(event) {
    this.setState({
      id: this.props.todos.todos[0].id
    })
    this.props.toggleComplete(this.state.id);
  }
  
  
  render() {
    return (
     <div>
        <h2>I am</h2>
      <form onSubmit={ this.handleSubmit }>
        <input value={ this.state.value } placeholder='Add Task...' onChange={ this.handleChange }/>
        <button type='submit'>Submit</button>
      </form>
      <ShowTodo toggle={ this.handleToggle } todos={this.props.todos} />
     </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({addTodo, toggleComplete}, dispatch);
}

const mapStateToProps = (state) => {
  return {
    todos: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListMain);