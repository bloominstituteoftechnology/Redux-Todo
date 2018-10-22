import { Filters } from "../actions";

const setFilter = (state = Filters.SHOW_ALL, action) => {
  switch (action.type) {
    case "SET_FILTER":
      return action.filter;
    default:
      return state;
  }
};

export default setFilter;
