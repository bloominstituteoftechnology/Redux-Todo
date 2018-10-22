import React from 'react';
import { connect } from 'react-redux';
import { addTodo, handleInput } from '../actions';

const Form = props => {
    return (
      <form onSubmit={(event) => props.addTodo(event, props.todo)}>
        <input
          name='todo'
          type='text'
          placeholder='Add todo'
          onChange={props.handleInput}
          value={props.todo}
        />
        <button type='submit'>Add</button>
      </form>
    )
  }

// export default Form;

const mapStateToProps = state => {
  return {
    todo: state.todo
  }
}

export default connect (
  mapStateToProps,
  { addTodo, handleInput }
)(Form);
