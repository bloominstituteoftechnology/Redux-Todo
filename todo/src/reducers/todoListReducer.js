const initialTodoArray = [
  { value: "Walk the dog", completed: false },
  { value: "Clean House", completed: false },
  { value: 'Do Laundry', completed: false }
];

const todoReducer = (state = initialTodoArray, action) => {
  return state;
};

export default todoReducer;
