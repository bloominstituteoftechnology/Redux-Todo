import React from "react";

const Form = props => {
  return (
    <form>
      <input type="text" value="" onChange={() => props.handleChange()} />
      <input
        type="submit"
        onClick={e => {
          e.preventDefault();
          props.handleSubmit();
        }}
        value="Add A Todo"
      />
    </form>
  );
};

export default Form;
