import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './action';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      todo: ""
    }
  }

  changeHandler = e =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  formHandler = e =>{
    e.preventDefault();
    this.props.addTodo(this.state.todo)
  }

  render() { 
    return ( 
      <form onSubmit={this.formHandler}>
        <input
          type="text"
          name="todo"
          value={this.state.todo}
          onChange={this.changeHandler}
        />
        <button type="submit">add todo</button>
      </form>
    );
  }
}

const mapStateToProps = () => {
  return {};
}

export default connect(
  () => ({}),
  { addTodo: addTodo }
)(Form);