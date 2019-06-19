import { ADD_ITEM, TOGGLE_DONE } from "../actions";

const initialState = {
  items: []
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const newItem = { description: action.payload, completed: false };
      return {
        ...state,
        items: [...state.items, newItem]
      };

    case TOGGLE_DONE:
      break;

    default:
      return state;
  }
};

export default rootReducer;
