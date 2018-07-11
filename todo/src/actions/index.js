const ADD_TODO = 'ADD_TODO';

const addTodo = (inputVal) => {
  console.log('InputVal in actions', inputVal)
  return {
    type: ADD_TODO,
    payload: inputVal
  };

}

export { ADD_TODO, addTodo };