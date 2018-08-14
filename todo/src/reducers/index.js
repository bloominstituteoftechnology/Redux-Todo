import React from 'react';

const initialState = [];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, {
        value: action.value,
        completed: false,
        id: action.id
      }]

    default:
      return state;
  }
}

export default todos;
