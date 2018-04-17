import React from 'react';
import { connect } from 'react-redux';

import { add } from '../actions/index';

class TodoInput extends React.Component {
  render() {
    return (
      <div>
        <input ref="test" type="text" />
        <button onClick={this.handleAdd}>Add Todo</button>
      </div>
    );
  }

  handleAdd = event => {
    console.log(event.target);
    event.preventDefault();
    this.props.add(this.refs.test.value);
    console.log(this.refs);
    this.refs.test.value = '';
  };
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

export default connect(mapStateToProps, { add: add })(TodoInput);