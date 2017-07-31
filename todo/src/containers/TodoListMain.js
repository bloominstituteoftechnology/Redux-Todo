import React, { Component } from 'react';
import ShowTodo from './ShowTodo';
import {addTodo, toggleComplete} from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './todoListMain.css';

class TodoListMain extends Component {
  //Create Constructor
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      id: ''
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
    event.preventDefault();
    this.setState({
      id: event.target.value
    })
    this.props.toggleComplete(event.target.value);
  }
  
  
  render() {
    return (
     <div>
      <center>
      <form onSubmit={ this.handleSubmit }>
        <input value={ this.state.value } placeholder='Add Task...' onChange={ this.handleChange }/>
        <button type='submit'>Submit</button>
      </form>
      <ShowTodo toggle={ this.handleToggle } todos={this.props.todos} />
      </center>
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
