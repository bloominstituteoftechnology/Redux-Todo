import { ADD_TASK, TOGGLE_TASK, DELETE_TASK } from '../actions/actionTypes';

let taskId = 0;
const initialState = {
  todos: []
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTask = {
        id: taskId,
        task: action.payload,
        completed: false
      }
      taskId++;
      return state.todos.concat(newTask);

    case TOGGLE_TASK:
      return state.todos.map(task => {
        if(task.id === action.payload){
          return Object.assign({}, task, {completed: !task.completed});
        }
        return task;
      });

    case DELETE_TASK:
      return state.todos.filter(task => task.id !== action.payload);

    default:
      return state;
  }
};