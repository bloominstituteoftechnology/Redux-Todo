import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToDo, toggleToDo } from '../actions';

class ItemList extends Component {
  render() {
    return (
      <div>
        {this.props.toDoList[0].text}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    toDoList: state,
  };
};

export default connect(mapStateToProps, { addToDo, toggleToDo })(ItemList);
