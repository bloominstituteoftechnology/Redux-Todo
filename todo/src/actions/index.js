let nextTodoId = localStorage.getItem('todos') 
  ? JSON.parse(localStorage.getItem('todos')).todos.length
  : 0;

const addTodo = (todo, id) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text: todo
  };
};

const setFilter = filter => {
  return {
    type: 'SET_FILTER',
    filter
  };
};

const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};

const deleteTodo = id => {
  return {
    type: 'DELETE_TODO',
    id
  };
};

const filters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export { addTodo, setFilter, toggleTodo, deleteTodo, filters };
