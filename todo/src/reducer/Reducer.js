//import actions

//set initial state
const initialState = {};

//create reducer
export default (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    // case addCase:
    //   return { ...state, addedItem };
    default:
      return state;
  }
};
