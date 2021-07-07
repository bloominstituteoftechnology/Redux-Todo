import React from 'react';

import { StyledInput, StyledForm, StyledButton, ClearButton } from './styles';

function TodoForm(props) {
  return (
    <StyledForm onSubmit={props.submitHandler}>
      <StyledInput
        type="text"
        name="newTodo"
        placeholder="What to do?"
        autoComplete="off"
        value={props.text}
        onChange={props.changeHandler}
      />
      <StyledButton type="submit">Add Todo</StyledButton>
      <ClearButton onClick={props.clearHandler}>Clear Completed</ClearButton>
    </StyledForm>
  );
}

export default TodoForm;
