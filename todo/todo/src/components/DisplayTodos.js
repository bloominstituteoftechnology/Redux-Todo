import React from 'react';
import { connect } from 'react-redux';

class DisplayTodos extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.todos}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

export default connect(mapStateToProps)(DisplayTodos);