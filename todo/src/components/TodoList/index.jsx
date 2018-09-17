import React from 'react';
import { connect } from 'react-redux';
import Todo from '../Todo';

const TodoList = props => {
  return (
    <div>
     TODO: map over some todos passed in as props
    </div>
  );
}

const mapStateToProps = (state) => {}

export default connect(mapStateToProps)(TodoList);