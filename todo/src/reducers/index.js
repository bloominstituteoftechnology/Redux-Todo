// Declare initial state
const initialState = {
  todos: []
};

//Detail the different switches
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        //something
      };
    case DELETE:
      return {
        //something
      };
    case FINISHED_TASK:
      return {
        //something
      };
    case DELETE_COMPLETED:
      return {
        //something
      };
    default:
      return state;
  }
};
