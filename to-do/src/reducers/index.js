import { CHANGE_TITLE, ADD_FRIEND, TOGGLE_BESTIES } from "../actions";

const initialState = {
  title: {
    text: "Hello Redux World! (I am inside redux)"
  },
  friends: [
    { name: "Matt", besties: true },
    { name: "Braeden", besties: false }
  ]
};

const titleReducer = (state = initialState, action) => {
  console.log("Inside reducer", action, state);
  switch (action.type) {
    case CHANGE_TITLE:
      return {
        ...state,
        title: {
          ...state.title,
          text: action.payload
        }
      };
    case ADD_FRIEND:
      return {
        ...state,
        friends: [...state.friends, { name: action.payload, besties: false }]
      };
    case TOGGLE_BESTIES:
      return {
        ...state,
        friends: state.friends.map((friend, index) => {
          if (index === action.payload) {
            return { ...friend, besties: !friend.besties };
          } else {
            return friend;
          }
        })
      };
    //       case DELETE_TODO - Hint use index to find it, use filter to filter it out
    default:
      return state;
  }
};

export default titleReducer;
