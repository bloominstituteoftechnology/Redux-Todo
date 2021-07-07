import React from 'react';
import { ADD_TODO, TOGGLE_COMPLETED } from '../reducers';

export const addTodo = name => {
  return {
    type: ADD_TODO,
    payload: name
  };
};

export const toggleCompleted = index => {
  return {
    type: TOGGLE_COMPLETED,
    payload: index
  };
};
