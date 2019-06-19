import { ADD_NEW_TASK, TOGGLE_TASK } from '../actions';

  const initialState = {
    todos: [
      { id: 1, task: 'do laundry', completed: false },
      { id: 2, task: 'complete code project', completed: false },
      { id: 3, task: 'tweet out JS Code Challenge', completed: true },
      { id: 4, task: 'call Mom today!', completed: false }
    ]
  };

  const taskReducer = ( state = initialState, action) => {
    switch(action.type) {
      case ADD_NEW_TASK:
        const newTask = { task: action.payload, completed: false }
        return { 
            ...state,
            todos: [ ...state.todos, newTask ]
          }
          
      case TOGGLE_TASK:
        return {
          ...state,
          todos: state.todos.map((task, index) => {
            if (task.id === index) {
              return {
                ...state,
                completed: !task.completed
              }
            } else {
              return task;
            }
          })
        }
      default:
        return state;
    }
  }

  export default taskReducer;