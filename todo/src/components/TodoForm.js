import React from "react";
import { connect } from "react-redux";
import { Add } from "../actions/actions";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  font-size: 1rem;
  height: 30px;
  width: 200px;
  padding-left: 10px;
  margin-top: 20px;
  border: none;
  color: white;
  background-color: transparent;
  border-bottom: 1px solid white;
  :focus {
    outline: none;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  background-color: #61DBFB;
  border-color: #61DBFB;
  margin-top: 20px;
  font-size: 1rem;
  width: 120px;
  height: 30px;
  border-radius: 10px;
  outline: 0;
  cursor: pointer;
  transition-duration: 0.2s;
  :hover {
    color: white;
    background-color: black;
    border-color: white;
  }
`;

const TodoForm = ({ dispatch }) => {
  let holder; //set text holder
  return (
    <Form
      className="form"
      onSubmit={e => {
        e.preventDefault();
        //dispatch ADD action in the form
        dispatch(Add(holder.value));
        //reset text holder
        holder.value = "";
      }}
    >
      <Input
        className="input"
        type="text"
        ref={node => (holder = node)}
        placeholder="enter a new to-do"
      />
      <Button>Add to-do</Button>
    </Form>
  );
};

export default connect()(TodoForm);