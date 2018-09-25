import React from 'react';
import { ADD_TODO, TOGGLE_TODO } from '../actions/index.js';

const initialTodoState = {
  todos: [
    {
      value: 'Walk the dog.',
      completed: false,

    }
  ]
};

export const todoReducer = (state= initialTodoState,action) =>{
  switch(action.type){
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
     case TOGGLE_TODO:
            return {
              ...state,
              todos: state.todos.map((todo, index) => {
                if (index === action.payload) {
                  return { ...todo, completed: !todo.completed };
                } else {
                  return todo;
                }
              })
            };
          default:
            return state;
        }
  }
