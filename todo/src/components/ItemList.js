import React, { Component } from 'react';
import { connect } from 'react-redux';
import { complete, uncomplete } from '../actions';

class ItemList extends Component {
  render() {
    console.log('my console log', this.props);
    return <div>{'Hello'}</div>;
  }
}

const mapStateToProps = state => {
  console.log ('new log', state);
  return {
    toDoList: state,
  };
};

export default connect(mapStateToProps, { complete, uncomplete })(ItemList);
