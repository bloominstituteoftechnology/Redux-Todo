import { combineReducers } from 'redux';

//------------------------------------actions
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

//------------------------------------reducers
function visibilityFilter(state = 'SHOW_ALL', action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}
const todo = (state = {}, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case TOGGLE_TODO:
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign({}, state, {
        completed: !state.completed
      });

    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, todo(undefined, action)];
    case TOGGLE_TODO:
      return state.map(t => todo(t, action));
    case REMOVE_TODO:
      return state.filter(id => state.id !== action.id) 
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  visibilityFilter,
  todos
});

export default rootReducer;

//------------------------------------action creators
let nextTodoId = 0;
export const addTodo = text => {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text
  };
};
export const setVisibilityFilter = filter => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  };
};
export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    id
  };
};

export const removeTodO = id => {
  return {
  type: REMOVE_TODO,
  id
  }
}