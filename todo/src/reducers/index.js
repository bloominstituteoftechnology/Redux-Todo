import {
  ADD_TASK,
  TOGGLE_COMPLETE,
  DELETE_TASK
} from "../actions";

const initialState = {
  todos: [
    {
      task: "Learn Redux",
      completed: false,
  
    },
    {
      task: "Don't mutate",
      completed: false,
 
    }
  ]
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        todos: [...state.todos, { task: action.payload, completed: false }]
      };

      
    case TOGGLE_COMPLETE:
      return {
        ...state,
        todos: state.todos.map((task, index) => {
          if (index === action.payload) {
            return {
              ...task,
              completed: !task.completed,
           
            };
         } else {
              return task
          }
          
        })
      };


    case DELETE_TASK:
      return {
        ...state,
        todos: state.todos.filter((task, index) => {
          if (index === action.payload) {
          } else {
            return task;
          }
        })
      };

    // case SHOW_COMPLETE:
    // return {
    //     ...state,
    //     todos: state.todos.map((task, index) => {
    //         if(index === action.payload) {
    //             return {...task, showComplete: 'line-through'}
    //         }

    //     })
    // }

    default:
      return state;
  }
};

export default todoReducer;
