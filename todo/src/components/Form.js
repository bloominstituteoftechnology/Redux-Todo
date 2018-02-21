import React from 'react';
import { connect } from 'react-redux';
import add_todo from '../actions/add_todo';

let Form = () => {

  return (
    <div>
      hello
    </div>
  );
};
Form = connect()(Form);

export default Form;
