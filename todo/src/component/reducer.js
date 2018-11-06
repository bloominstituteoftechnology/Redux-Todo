import { ADD_TASK } from './actions'

const initialState = [{task:"ffff"}]  

export default (state = initialState, action) => {
  /* the entire state */
  switch (action.type) {
    case ADD_TASK:
     return[...state,{...action.payload}];
    
    default:
      return state;
  }
};
