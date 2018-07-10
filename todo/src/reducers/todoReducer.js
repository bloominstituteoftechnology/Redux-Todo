const todos = {
  todos: [
    {value: 'To do 0', completed: false},
    {value: 'To do 1', completed: false},
    {value: 'To do 2', completed: false},
    {value: 'To do 3', completed: false},
    {value: 'To do 4', completed: false}
  ]
};

const todoReducer = (state = todos, action) => {
  return state;
};

export default todoReducer;