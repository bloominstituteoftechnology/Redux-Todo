export const ADD_TODO = 'ADD_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const VISIBILITY_FILTERS = 'VISIBILITY_FILTERS';
export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_COMPLETED = 'SHOW_COMPLETED';
export const SHOW_ACTIVE = 'SHOW_ACTIVE';

// export const VisibilityFilters = 'VisibilityFilters';

let nextTodoId = 0;

export const addTodo = text => {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text: text
  };
};

export const setVisibilityFilter = filter => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter: filter
  };
};

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    id: id
  };
};

export const VisibilityFilters = {
    SHOW_ALL: SHOW_ALL,
    SHOW_COMPLETED: SHOW_COMPLETED,
    SHOW_ACTIVE: SHOW_ACTIVE
};