import { combineReducers } from 'redux';
import { ADD_TODO, TOGGLE_COMPLETE, DELETE_TODO } from '../actions/actions';

const toggleObj = (obj, property) => ({
  ...obj,
  property: !(obj[property]),
});

const byId = (state = {}, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { id, text } = action.payload;
      return {
        ...state,
        [id]: {
          id, text, completed: false,
        },
      };
    }
    case TOGGLE_COMPLETE: {
      const { id } = action.payload;
      return {
        ...state,
        id: toggleObj(state[id], 'completed'),
      };
    }
    case DELETE_TODO: {
      const { id } = action.payload;
      const { [id]: deleteObj, ...rest } = state;
      return rest;
    }
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { id } = action.payload;
      return [...state, id];
    }
    case DELETE_TODO: {
      const { id } = action.payload;
      return state.filter(savedId => savedId !== id);
    }
    default:
      return state;
  }
};

const reducer = combineReducers({ byId, allIds });
export default reducer;

export const getTodos = (state) => {
  const { byId: byIdState, allIds: allIdsState } = state;
  return allIdsState.map(id => byIdState[id]);
};


// (state = { byId: {}, allIds: [] }, action) => {
//   const { todos = [], ...rest } = state;

//   switch (action.type) {
//     case ADD_TODO:
//       return {
//         ...rest,
//         todos: [...todos, { id: action.payload.id, text: action.payload.text, completed: false }],
//       };

//     case TOGGLE_COMPLETE: {
//       const index = todos.findIndex(todo => todo.id === action.payload.id);
//       const todo = todos[index];
//       return {
//         ...rest,
//         todos: [...todos.slice(0, index), { ...todo, completed: !todo.completed }],
//       };
//     }

//     case DELETE_TODO: {
//       return {
//         ...rest,
//         todos: todos.filter(todo => todo.id !== action.payload.id),
//       };
//     }

//     default:
//       return state;
//   }
// };
