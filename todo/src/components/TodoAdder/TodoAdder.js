import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/todos';

class TodoAdder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: ''
    }
  }

  updateInput = (event) => {
    this.setState({newTodo: event.target.value});
  }

  add = () => {
    this.props.addTodo(this.state.newTodo, this.props.index);
    this.setState({newTodo: ''});
  }
  render() {
    return (
      <div>
        <input ref="todoInput" value={this.state.newTodo} onChange={this.updateInput}  /> 
        <button onClick={this.add}>Add Todo</button>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { todos: state }
};

export default connect(mapStateToProps, { addTodo })(TodoAdder);