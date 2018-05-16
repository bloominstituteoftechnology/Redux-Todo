import { createStore, combineReducers } from 'redux';

const initalState = {todo: [], value: "Walked the dog" , value: false}
const todoReducer = ( state = initalState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return Object.assign({}, state, {value: state.value + action.payload});
        default:
            return state;
    }
};



export default todoReducer;