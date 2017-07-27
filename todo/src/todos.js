import React, { Component } from 'react';
import { connect } from 'react-redux';

class Todos extends Component {
  render() {
    return (
      
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(Todos);