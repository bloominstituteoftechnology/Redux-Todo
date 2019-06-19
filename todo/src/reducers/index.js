import { ADD_ITEM, TOGGLE_DONE } from "../actions";

const initialState = {
  items: [{ description: "", completed: false }]
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      console.log("in add item");
      break;

    case TOGGLE_DONE:
      console.log("in toggle done");
      break;

    default:
      return state;
  }
};

export default rootReducer;
