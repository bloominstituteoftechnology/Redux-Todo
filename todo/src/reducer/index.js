export const todoReducer = (state = [], action) => {
  switch(action.type) {
    case ADD_TODO:
      return state.concat(action.payload);
    case REMOVE_TODO:
      const newState = [...state];
      return newState.filter(obj => obj.id !== action.payload.id);
    default:
      return state;
  }
}