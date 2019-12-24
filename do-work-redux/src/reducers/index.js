import {
  TOGGLE_COMPLETE,
  ADD_TASK,
  DELETE_TASK,
  DELETE_TASKS
} from '../actions';

const taskReducer = (state = [], action) => {
  console.log('inside reducer', action, state);
  switch (action.type) {
    case TOGGLE_COMPLETE:
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === action.payload) {
            return {
              ...task,
              completed: !task.completed
            };
          }
          return task;
        })
      };
    case ADD_TASK:
      if (!state.tasks) {
        return {
          ...state,
          tasks: [action.payload]
        };
      } else {
        return {
          ...state,
          tasks: [...state.tasks, action.payload]
        };
      }

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };
    case DELETE_TASKS:
      return {
        ...state,
        tasks: state.tasks.filter(task => !task.completed)
      };
    // case FILTER_TASKS:
    //   return {
    //     ...state,
    //     visibilityFilter: action.payload
    //   };
    default:
      return state;
  }
};

export default taskReducer;
