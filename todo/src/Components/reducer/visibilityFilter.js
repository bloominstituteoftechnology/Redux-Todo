import { VisibilityFilters } from "../actions";

 const visibilityFilter = (state = VisisilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case "SET_FILTER":
      return action.filter;
    default:
      return state;
  }
};
 export default visibilityFilter;