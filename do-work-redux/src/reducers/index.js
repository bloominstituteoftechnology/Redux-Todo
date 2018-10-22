import { TOGGLE_COMPLETE, ADD_TASK } from '../actions';

const initialState = {
  tasks: [
    {
      id: 0,
      task: 'Clean Room',
      completed: false
    },
    {
      id: 1,
      task: 'Run',
      completed: false
    },
    {
      id: 2,
      task: 'Read book',
      completed: false
    },
    {
      id: 3,
      task: 'Pay Credit Card bill',
      completed: false
    },
    {
      id: 4,
      task: 'Buy lotto ticket',
      completed: false
    }
  ]
};

const taskReducer = (state = initialState, action) => {
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
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };

    default:
      return state;
  }
};

export default taskReducer;
