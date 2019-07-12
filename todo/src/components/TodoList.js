import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completeItem } from '../action';

class TodoList extends Component {

  completeItem = (e) => {
    this.props.completeItem(e)
  }

  renderItems() {
    return this.props.items.map((item, i) => {
      return (
        <li
          className = {`${item.completed ? 'completed' : ''}`}
          onClick={() => this.completeItem(item)}
          key={i}>
          {item.name}
        </li>
      );
    });
  }

  render() {
    return (
      <ul>
        {this.renderItems()}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

export default connect(mapStateToProps, {completeItem})(TodoList);