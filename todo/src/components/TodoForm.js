import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../Actions/actionCreators";
import styled from "styled-components";

class TodoForm extends React.Component {
    todoInput = React.createRef();
  
    onKeyDown = e => {
      if (e.key === "Enter") {
        this.props.addTodo(this.todoInput.current.value);
        this.todoInput.current.value = "";
      }
    };
  
    render() {
      return (
        <StyledInput
          onKeyDown={this.onKeyDown}
          ref={this.todoInput}
          placeholder="Todo!"
          type="text"
        />
      );
    }
  }
  
  export default connect(
    null,
    { addTodo }
  )(TodoForm);

  const StyledInput = styled.input`
  padding:10px;
  border-radius: 4px;
  color: black;
  font-size: 45px;
  margin: 40px auto;
  display: block;
  background-color:#fff;
`;