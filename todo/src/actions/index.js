export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';


export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VISIBILITY_FILTERS = 'VISIBILITY_FILTERS';
export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_COMPLETED = 'SHOW_COMPLETED';
export const SHOW_ACTIVE = 'SHOW_ACTIVE';

export const VISIBILITYFILTERS = 'VISIBILITYFILTERS';

export const NEW_TODO = 'NEW_TODO';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';

let nextTodoId = 1;

export const addTodo = (todo) => {
  return {
    type: NEW_TODO,
    payload: todo
  };
};

export const setVisibilityFilter = filter => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter: filter
  };
};

export const toggleComplete = index => {
  return {
    type: TOGGLE_COMPLETE,
    payload: index
  };
};

export const VisibilityFilters = {
    SHOW_ALL: SHOW_ALL,
    SHOW_COMPLETED: SHOW_COMPLETED,
    SHOW_ACTIVE: SHOW_ACTIVE
};