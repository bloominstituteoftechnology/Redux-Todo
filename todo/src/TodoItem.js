import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleSelect, removeItem } from './actions';

class TodoItem extends Component {
  render() {
    return (
      <ul>
        { this.props.todos.map((item, i) => {
            return <li style={item.completed? {color: 'red'}: {color: 'black'}} key={i} onClick={() => { this.props.toggleSelect(i) }}>{item.text}
            <span onClick={() => { this.props.removeItem(i) }}> X</span>
            </li>
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

export default connect(mapStateToProps, {toggleSelect, removeItem})(TodoItem);