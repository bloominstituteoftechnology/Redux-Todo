import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
`;

const FormInput = styled.input`
  margin: 20px 0;
  border: none;
  border-bottom: 2px solid #bdbdbd;
  width: 100%;
  height: 30px;
  font-size: 1.6rem;
  transition: border-bottom 0.3s linear;

  ::placeholder {
    color: #bdbdbd;
    transition: color 0.3s linear;
  }

  :focus::placeholder {
    color: #424242;
  }

  :focus {
    outline: none;
    border-bottom: 2px solid #7f39fb;
  }
`;

const FormButton = styled.button`
  width: 37%;
  height: 45px;
  margin-right: 16px;
  margin-bottom: 20px;
  border-radius: 4px;
  font-size: 1.5rem;
  color: #212121;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1), 0 3px 1px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.3s linear;
  cursor: pointer;

  :focus {
    outline: none;
  }

  :hover {
    box-shadow: none;
    border-color: #f5f5f5;
    background-color: #f5f5f5;
  }

`;

const TodoForm = props => {
  return (
    <FormContainer onSubmit={props.addTodo}>
      <FormInput
        type="text"
        placeholder="Add new todo"
        onChange={props.handleChange}
        name="newTodo"
        value={props.newTodo}
      />
      <FormButton type="submit">Add Todo</FormButton>
    </FormContainer>
  );
}

export default TodoForm;
