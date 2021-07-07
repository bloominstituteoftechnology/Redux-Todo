import React from 'react';
import styled from 'styled-components';


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