import {ADD_ITEM, TOGGLE_COMPLETE} from '../actions';

const initialState = {
    todos: []
  }

  export default (state= initialState, action)=> {
      switch(action.type) {
        case ADD_ITEM:
            return Object.assign({}, state, {todos:[...state, {value: action.payload}]});
        case TOGGLE_COMPLETE:
            return null;
        default: 
            return state; 
      }
 
  }