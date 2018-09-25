export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const addTodo = todo =>{
console.log(todo)
  return{
    type:ADD_TODO,
    payload: {
      value: todo,
      completed: false
    }
  }
}
export const toggleTodo = index => {
  console.log(index);
  return {
    type: TOGGLE_TODO,
    payload: index
  };
};
