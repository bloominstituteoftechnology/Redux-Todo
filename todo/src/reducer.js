import { ADD_TASK, DECREMENT } from '../actions';

const initialState = {
  todo: []
}

// It receives the state
// of our redux store, along with an action created
// by our action creator. 
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state,
    {
        value: action.value,
        completed: false
    }]
    case DECREMENT:
      return {  }
    default:
      return state;
  }
};