import React from 'react';
import { connect } from 'react-redux';
import add_todo from '../actions/add_todo';

let Form = (props) => {
  console.log(props);

  return (
    <form onSubmit={event => {
      event.preventDefault();
      add_todo('tada');
    }}>
      <input type="text"/>
      <button type="submit">
        Add To List
      </button>
    </form>
  );
};

const mapDispatchToProps = {
  add_todo: add_todo
};

export default connect(mapDispatchToProps)(Form);
