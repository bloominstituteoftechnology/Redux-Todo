import { combineReducers } from "redux";
import { addItem } from "./addItem";
import { toggleDone } from "./toggleDone";

export default combineReducers({
  addItem,
  toggleDone
});
