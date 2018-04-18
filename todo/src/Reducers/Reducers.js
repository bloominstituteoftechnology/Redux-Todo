import { ADD_TODO, HANDLE_INPUT } from '../Actions/Actions';

export const Todo_Reducer = (state = [], action) => {
    switch(action.type) {
        case ADD_TODO:
            return [...state, ...action.payload];
  };
}
