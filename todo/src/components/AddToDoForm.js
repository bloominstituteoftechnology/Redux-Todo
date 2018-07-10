import React from 'react';
import { connect } from 'react-redux';
import { addTodo, handleInput } from '../actions';

const AddToDoForm = props => {
  const handleChange = e => {
    props.handleInput(e.target.value);
  };

  const handleClick = e => {
    props.addTodo();
  };

  return (
    <React.Fragment>
      <input onChange={handleChange} value={props.input} />
      <button onClick={handleClick}>Add Todo</button>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    addTodo: state.addTodo,
    handleInput: state.handleInput,
  };
};

export default connect(
  mapStateToProps,
  { addTodo, handleInput },
)(AddToDoForm);
