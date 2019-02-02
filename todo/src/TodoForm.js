import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from './actions';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ""
    }
  }

  changeHandler = event => {
    this.setState({
      inputText: event.target.value
    })
  }

  submitHandler = event => {
    event.preventDefault();

    this.props.addTodo(this.state.inputText)
    this.setState({ inputText: "" })
  }

  render() {
    return (
      <form onSubmit={this.props.addTodo}>
        <input type="text" placeholder="Add Task" value={this.state.inputText} onChange={this.changeHandler}></input>
        <button type="submit" >Add Task</button>
        {/* <button type = "button" onClick = {this.props.clearHandler}>Clear Completed</button> */}
      </form>
    );
  }
}
const mapStateToProps = state => {
  return {
    newTodo: {
      value: state.newTodo.value,
      completed: state.newTodo.completed
    }
  }
}


export default connect(mapStateToProps, { addTodo: addTodo })(TodoForm);