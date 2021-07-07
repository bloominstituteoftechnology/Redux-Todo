export const ADD_TODO = 'ADDTODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';

//actions return an OBJECT with type and payload properties to the store
//store dispatches this object to the reducers which makes a new copy of state and replaces it

export const addTodo = (packetFromSubmitTodo) => {
    return {
        type: ADD_TODO,
        payload: packetFromSubmitTodo,
    };
};

export const completeTodo = (idFromCompletedTodo) => {
  return {
    type: COMPLETE_TODO,
    payload: idFromCompletedTodo,
  }
}
