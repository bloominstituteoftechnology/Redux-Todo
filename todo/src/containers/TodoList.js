import React, { Component } from "react";
import Form from "../components/Form";
import Todo from "../components/Todo";
import styled from "styled-components";

const Div = styled.div`
  max-width: 700px;
  margin: 30px auto;
  padding: 40px;
  background: slateblue;
  border-radius: 5px;
  box-shadow: -1px 2px 7px rgba(0, 0, 0, 0.3);
`;
const Ul = styled.ul`
  list-style: none;
  margin: 0 auto;
  padding: 0;
`;

class TodoList extends Component {
  render() {
    return (
      <Div>
        <Form />
        <Ul>
          <Todo />
        </Ul>
      </Div>
    );
  }
}

export default TodoList;
