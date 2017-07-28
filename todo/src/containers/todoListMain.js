import React, { Component } from 'react';
import ShowTodo from './ShowTodo';
import {addTodo} from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class TodoListMain extends Component {
  //Create Constructor
  constructor(props) {
    super(props);
    this.state = {
      value: ''
      }
    this.handleSubmit = this.handleSubmit.bind(this);
    }
  
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      value: '',
    });
    this.props.addTodo(this.state.value);
  } 
  
  
  render() {
    return (
     <div>
        <h2>I am</h2>
      <form onSubmit={ this.handleSubmit }>
        <input placeholder='Add Task...' />
        <button type='submit'>Submit</button>
      </form>
      <ShowTodo />
     </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({addTodo}, dispatch);
}

const mapStateToProps = (state) => {
  return {
    todos: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListMain);