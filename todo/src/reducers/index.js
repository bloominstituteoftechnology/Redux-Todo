import { ADD_TODO, TOGGLE_TODO } from '../actions';

const dummyData = [
  {
    id: 0,
    text: 'Walk the dog.',
    completed: true,
  },
  {
    id: 1,
    text: 'Buy milk.',
    completed: false,
  },
  {
    id: 2,
    text: 'Relax.',
    completed: false,
  },
];

export const ToDoList = (state = dummyData, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id !== action.id) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    default:
      return state;
  }
};

export default ToDoList;