import {ADD_TODO} from "../actions";

const initialState = {todos: [{value: "study", completed: false}]};

const todoReducer = (state = initialState, action) => {
  console.log("REDUCER", state, action);
  switch (action.type) {
    default:
      return state;
  }
};

export default todoReducer;
