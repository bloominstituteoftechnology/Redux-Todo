import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from "../action";

export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return state.concat(action.payload);
        case DELETE_TODO:
            const newState = [...state];
            return newState.filter(obj => obj.id !== action.payload.id);
        case COMPLETE_TODO:
            return state.map(obj => {
              if (obj.id === action.payload.id) {
                return {
                  ...obj,
                  completed: true,
                }
              }
              return {
                ...obj,
              };
            })
        default:
            return state;
    }
}