import { createStore, combineReducers } from 'redux';

const initalState = {todo: [], value: "Walked the dog" , value: false}
const todoReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat(action.payload);
        default:
            return stateProp;
    }
};

console.log(todoReducer)

export default todoReducer;