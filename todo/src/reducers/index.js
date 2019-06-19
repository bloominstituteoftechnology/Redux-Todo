import { ADD_ITEM, TOGGLE_DONE } from "../actions";

const initialState = {
  items: [{ description: "finish app", completed: false }]
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const newItem = { description: action.payload, completed: false };
      console.log(newItem);

      return {
        ...state,
        items: [...state.items, newItem]
      };

    case TOGGLE_DONE:
      console.log("in toggle done");
      break;

    default:
      return state;
  }
};

export default rootReducer;
