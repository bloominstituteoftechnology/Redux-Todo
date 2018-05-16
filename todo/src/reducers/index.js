import { ADD_TASK, TOGGLE_TASK, DELETE_TASK } from '../actions/actionTypes';

let taskId = 0;
const initialState = {
  tasks: []
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTask = {
        id: taskId,
        value: action.payload,
        completed: false
      }
      taskId++;
      return Object.assign({}, state, { tasks: state.tasks.concat(newTask)});

    case TOGGLE_TASK:
      const toggledTaskList = state.tasks.map(task => {
        if (task.id === action.payload) {
          return Object.assign({}, task, { completed: !task.completed });
        }
        return task;
      });
      return Object.assign({}, state, { tasks: toggledTaskList });

    case DELETE_TASK:
      const newTaskList = state.tasks.filter(task => task.id !== action.payload);
      return Object.assign({}, state, { tasks: newTaskList });

    default:
      return state;
  }
};