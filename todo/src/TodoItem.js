import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleSelect } from './actions';

class TodoItem extends Component {
  render() {
    return (
      <ul>
        { this.props.todos.map((item, i) => {
            return <li style={item.completed? {color: 'red'}: {color: 'black'}} key={i} onClick={() => { this.props.toggleSelect(i) }}>{item.text}</li>
            })  }
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

export default connect(mapStateToProps, {toggleSelect})(TodoItem);