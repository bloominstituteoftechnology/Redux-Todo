import { ADD_TASK, TOGGLE_TASK, DELETE_TASK } from '../actions/actionTypes';

let taskId = 0;
export const taskReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTask = {
        id: taskId,
        task: action.payload,
        completed: false
      }
      taskId++;
      return state.concat(newTask);

    case TOGGLE_TASK:
      return state.map(task => {
        if(task.id === action.payload){
          return Object.assign({}, task, {completed: !task.completed});
        }
        return task;
      });

    case DELETE_TASK:
      return state.filter(task => task.id !== action.payload);

    default:
      return state;
  }
};