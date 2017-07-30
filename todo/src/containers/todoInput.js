import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo } from '../actions';


class TodoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {todo: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({todo: event.target.value});
    //console.log(this.todo);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.addTodo(this.state.todo);
    this.setState({todo: ''});
    //this.todo = '';
  }

  render() {
    return (
      <div>
        <form onSubmit ={this.handleSubmit} name='todoForm'>
        <input value={this.state.todo} onChange={this.handleChange} ></input>
        <button type='submit'>Submit</button>
        </form>
        <ul> 
          {this.props.todo.map((item) => {
          return <li key={item.id}>{item.todo}</li>
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