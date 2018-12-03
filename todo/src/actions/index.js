let nextTodoId = localStorage.getItem('todos') 
  ? JSON.parse(localStorage.getItem('todos')).todos.length
  : 0;

const types = {
  ADD_TODO: 'ADD_TODO',
  SET_FILTER: 'SET_FILTER',
  TOGGLE_TODO: 'TOGGLE_TODO',
  DELETE_TODO: 'DELETE_TODO'
};

const addTodo = (todo, id) => ({
  type: types.ADD_TODO,
  id: nextTodoId++,
  text: todo
});

const setFilter = filter => ({
  type: types.SET_FILTER,
  filter
});

const toggleTodo = id => ({
  type: types.TOGGLE_TODO,
  id
});

const deleteTodo = id => ({
  type: types.DELETE_TODO,
  id
});

const filters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export { types, addTodo, setFilter, toggleTodo, deleteTodo, filters };
