// export const ADD_TODO = 'ADDTODO';


// export const addTodo = (todo) => {
//     return {
//         type: ADD_TODO,
//         payload: todo,
//     };
// };

export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';

export const addTodo = packetFromSubmitTodo => {
  return {
    type: ADD_TODO,
    payload: packetFromSubmitTodo
  };
};

export const completeTodo = id => {
  return {
    type: COMPLETE_TODO,
    payload: id
  };
};
