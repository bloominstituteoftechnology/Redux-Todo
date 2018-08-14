import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from '../actions';

 class Container extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="...add task"/>
        <button onClick={() => this.props.addTodo() }>Add Todo</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        state: state
    };
};

export default connect(mapStateToProps, { addTodo, toggleTodo })(Container);