import React from 'react';
import { connect } from 'react-redux';
import { addTodo, handleInput } from '../actions';

const AddToDoForm = props => {
  const handleChange = e => {
    props.handleInput(e.target.value);
  };

  const handleClick = e => {
    props.addTodo(props.item);
  };

  return (
    <React.Fragment>
      <input onChange={handleChange} value={props.item} />
      <button onClick={handleClick}>Add Todo</button>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    addTodo: state.addTodo,
    handleInput: state.handleInput,
    item: state.input,
  };
};

export default connect(
  mapStateToProps,
  { addTodo, handleInput },
)(AddToDoForm);
