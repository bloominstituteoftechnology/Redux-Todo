let nextToId = 0;

export const addTodo = (text) => {
  nextToId += 1;
  return {
    type: 'ADD_TODO',
    id: nextToId,
    text,
  };
};

export const setVisibilityFilter = filter => (
  {
    type: 'SET_VISIBILITY_FILTER',
    filter,
  }
);

export const toggleTodo = id => (
  {
    type: 'TOGGLE_TODO',
    id,
  }
);
