import React from 'react';
import { connect } from 'react-redux';
import add_todo from '../actions/add_todo';

let Form = (props) => {
  console.log(props);

  return (
    <form onSubmit={event => {
      event.preventDefault();
      props.add_todo('tada');
    }}>
      <input type="text"/>
      <button type="submit">
        Add To List
      </button>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps,{add_todo})(Form);
