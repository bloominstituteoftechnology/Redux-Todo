import {ADD_TODO, TOGGLE_TODO} from '../actions/types';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
      case ADD_TODO:
        return state.concat(action.payload);
     
      case TOGGLE_TODO:
        return state.map(item => {
          if (item.id === action.payload) {
            return Object.assign({}, item, { completed: !item.completed });
          } else {
            return item;
          }
        });
     default: 
     return state;
    }
  };