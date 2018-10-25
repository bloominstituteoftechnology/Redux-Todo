import React from 'react';

import { StyledInput, StyledForm, StyledButton } from './styles';

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
    </StyledForm>
  );
}

export default TodoForm;
