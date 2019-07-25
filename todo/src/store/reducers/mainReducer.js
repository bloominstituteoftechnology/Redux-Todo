import {ADD_TASK} from '../actions/addTask';

export const initialState ={
        todos: [
        {
      value: 'Walk the Dog',
      completed: false
      }
    ]
  }

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK: {
            return {
                ...state,
                reducerValue: action.payload
            };
        }
        default: return state;
    }
}

