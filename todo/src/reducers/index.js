import { combineReducers } from "redux";
import AddItem from "./add-item";
import DeleteItem from "./delete-item";
import ShowIncomplete from "./show-incomplete";
import ShowComplete from "./show-complete";

const rootReducer = combineReducers({
  addItem: AddItem,
  deleteItem: DeleteItem,
  activeMovies: ShowIncomplete,
  completedMovies: ShowComplete
});

export default rootReducer;
