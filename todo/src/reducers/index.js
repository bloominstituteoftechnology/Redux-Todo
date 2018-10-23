import {ADD_TODO} from "../actions";

const initialState = {todos: []};

const todoReducer = (state = initialState, action) => {
  console.log("REDUCER", state, action);
  switch (action.type) {
    default:
      return state;
  }
};

export default todoReducer;
