import React from 'react';
import './Todo.css';
import { connect } from 'react-redux';

const Todo = props => {
  return (
    <div className="todo-wrapper">
      TODO
    </div>
  );
}

const mapStateToProps = (state) => { }

export default connect(mapStateToProps, {})(Todo);
