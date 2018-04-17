export default (state = null, action) => {
  // console.log(action.payload);
  switch (action.type) {
    case "TODO_SELECTED":
      return action.payload;
    default:
      return state;
  }
};
