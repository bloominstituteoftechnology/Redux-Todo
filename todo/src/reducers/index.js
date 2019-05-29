import { TOGGLE, ADD } from "../actions";

// export default (events = [], Actions) => {
//   switch (Actions.type) {
//     case ADD:
//       return events.concat(Actions.data);
//     case TOGGLE:
//       events[Actions.data].complete = !events[Actions.data].complete;
//       return events;

//   }
// }
// function reducer() {

// }

const initialState = {
  todos: [
    {
      value: 'Walk the dog.',
      completed: false
    }
  ],
}



function reducer(state = initialState, action) {
  //switch statement goes here
  switch (action.type) {
    case ADD:
      return {
        ...state,
        title: action.payload
      };
    case TOGGLE:
      return {
        ...state,
        name: action.payload

      }
    default:
      return state;
  }
}

export default reducer;