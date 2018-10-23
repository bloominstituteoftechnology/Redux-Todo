import { ADD_TO_LIST, CHANGE_COMPLETED } from '../actions';

const initialState = {
  todo: [
      {
        value: 'Hello',
        completed: false,
    }
],
}

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_LIST:
    return {...state, todo: [...state.todo, 
        {
        value: action.payload,
        completed: false,
        }
    ]};
    case CHANGE_COMPLETED:
    return  {
        ...state, todo: state.todo.map((task, i) => {
            if(action.payload === i) {
                return {
                    ...task,
                    completed: !task.completed,
                }
            } else {
                return task;
            }
        })
    }
    default:
      return state;
  }
};