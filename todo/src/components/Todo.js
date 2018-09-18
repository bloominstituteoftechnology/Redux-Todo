import React from 'react';
import { connect } from 'react-redux';

const Todo = ({ value }) => (
  
  <li>
    {value}
  </li>
 
)


// write a mapStateToProps function to get our state from the Redux store
const mapStateToProps = state => ({
  todos: state.todos
});

// Use the "connect" HOC to get this component connected to Redux

export default connect(
  mapStateToProps,
  // { changeColor: changeColor }
)(Todo);