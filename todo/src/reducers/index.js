import { combineReducers } from "redux";
import todos from "./todos";
import setFilter from "./setFilter";

export default combineReducers({
  todos,
  setFilter
});
