
//import React from 'react';
//import ReactDOM from 'react-dom';
//import { createStore } from 'redux';
//import { Provider } from 'react-redux';
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "../actions";




// Handle store

const initialState = {
    todos: [
        {
            id: 0,
            task: "Make Pete mow the lawn",
            completed: false
        },
        {
            id: 1,
            task: "Make Aron do the dishes",
            completed: false
        },
        {
            id: 2,
            task: "Shop fresh fruits",
            completed: false
        },
        {
            id: 3,
            task: "Buy cat food",
            completed: false
        }
    ],
};

export const todoReducer= (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, state,{
                todos: [...state.todos, action.payload]
            });
        case TOGGLE_TODO:
            let updatedToggles = state.todos.map((item) => {
                if (item.id === action.payload) {
                    item.completed = !item.completed
                    return item;
                } else {
                    return item;
                }
            })
            return {
                todos: updatedToggles
            }
        case DELETE_TODO:
            let updatedArray = state.todos.filter(item => item.id !== action.payload)
            return {
                todos: updatedArray
            }
        default:
            return state;
    }
}
