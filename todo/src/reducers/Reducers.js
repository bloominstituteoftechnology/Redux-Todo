// import { ADD_TODO, DELETE_TODO, CROSSOFF_TODO } from "../Actions/Actions";

export default (state = [], action) => {
  switch (action.type) {
    // case ADD_TODO:
    //   return [
    //     ...state,
    //     {
    //       value: action.text,
    //       completed: false
    //     }
    //   ];
    default:
      return state;
  }
};

