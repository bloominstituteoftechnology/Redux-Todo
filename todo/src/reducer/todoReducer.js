import React from 'react';
import { ADD_TODO, TOGGLE_TODO, DELETE_COMMENT} from '../actions/index.js';

const initialTodoState = {
  todos: [
    {
      id:0,
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
            case 'DELETE_COMMENT':
            const commentId = action.payload;
        return (state.todos.filter(comment => comment.id !== commentId));
          default:
            return state;
        }

  }
