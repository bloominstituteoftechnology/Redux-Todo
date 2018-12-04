import { ADD_TODO } from '../reducers';

// export const addTodo = name => {
//     return {
//         type: ADD_TODO,
//         payload: name
//     };
// };

export const addTodo = name => {
    console.log(name);
    return {
      type: ADD_TODO,
      payload: name
    };
  };