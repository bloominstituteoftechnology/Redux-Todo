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

      case "REMOVE_COMPLETED":
        return state.filter(item => item.id !== action.id)

      case "COMPLETED":
        let completedItem = state.find(item => item.id === action.id);
        completedItem.completed = !action.completed;
        const index = state.findIndex(item => item.id === action.id);
        const newState = state;
        newState[index] = completedItem;
        return newState;

    default:
      return state;
  }
}

export default todos;
