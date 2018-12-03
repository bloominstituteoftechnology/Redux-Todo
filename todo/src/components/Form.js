import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";
import styled from "styled-components";

const Input = styled.input`
  padding: 10px;
  background: lightpink;
  box-shadow: -1px 2px 7px rgba(0, 0, 0, 0.1);
  font-size: 18px;
  width: 70%;
  border: none;
  border-bottom: 2px solid #909;
  outline: none;
  margin-bottom: 30px;

  &::-webkit-input-placeholder {
    /* WebKit, Blink, Edge */
    color: #909;
  }
  &:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: #909;
    opacity: 1;
  }
  &::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #909;
    opacity: 1;
  }
  &:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #909;
  }
  &::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #909;
  }

  &::placeholder {
    /* Most modern browsers support this now. */
    color: #909;
  }
`;

const Button = styled.button`
  padding: 10px;
  color: white;
  background: #909;
  box-shadow: -1px 2px 7px rgba(0, 0, 0, 0.1);
  font-size: 18px;
  width: 20%;
  border: 1px solid #909;
  border-bottom: 2px solid #909;
  cursor: pointer;
  outline: none;
`;

const Form = ({ dispatch, handleChange }) => {
  let input;

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) return;
        dispatch(addTodo(input.value));
        input.value = "";
      }}
    >
      <Input
        type="text"
        value=""
        placeholder="Enter Your Todo Here..."
        onChange={handleChange}
      />
      <Button type="submit">Add A Todo</Button>
    </form>
  );
};

export default connect()(Form);
