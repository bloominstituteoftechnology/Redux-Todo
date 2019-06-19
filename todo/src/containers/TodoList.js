import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completeItem } from '../actions';
import { bindActionCreators } from 'redux';

class TodoList extends Component {

  renderItems() {
    return this.props.items.map((item, i) => {
      return (
        <li
          onClick={() => this.props.completeItem(item)}
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

const mapDispatchToProps = (dispatch) => { //methods on the returned object will be a prop
  // When we call completeItem we should pass the action to all reducers
  return bindActionCreators({ completeItem: completeItem }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);