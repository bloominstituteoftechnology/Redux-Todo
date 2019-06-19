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
      return {
        ...state,
        items: state.items.map((item, index) => {
          if (action.payload === index) {
            return {
              ...item,
              completed: !item.completed
            };
          } else {
            return item;
          }
        })
      };

    default:
      return state;
  }
};

export default rootReducer;
