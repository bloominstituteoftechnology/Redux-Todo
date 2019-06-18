const rootReducer = combineReducers({
  activeMovies: ShowIncomplete,
  completedMovies: ShowComplete,
  addItem: AddItem
  //   deleteItem: DeleteItem,
});

export default rootReducer;
