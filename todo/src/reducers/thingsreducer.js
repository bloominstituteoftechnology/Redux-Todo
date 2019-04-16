import { ADD_THING, TOGGLE_THING } from '../actions';

const initialState = {
  things: [
    { name: 'do laundry', completed: true },
    { name: 'stop being confused', completed: false }
  ]
};

// console.log(initialState)

export const thingsreducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_THING:
      const newThing = {
        name: action.payload,
        completed: false
      };
      return {
        ...state,
        things: [...state.things, newThing]
      };

      case TOGGLE_THING:
      return {
        ...state,
        things: state.things.map((thing,index) =>
        action.payload=== index
        ? {...thing, completed: !thing.completed}
        : thing
        )
      };

    default:
      console.log(state);
      return state;
  }
};
