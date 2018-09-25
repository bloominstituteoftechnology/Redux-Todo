export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_COMMENT= "DELETE_COMMENT";

export const addTodo = (todo,index) =>{
console.log(todo)
  return{
    type:ADD_TODO,
    payload: {
      id:'',
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

export const deleteTodo = index => {
  console.log(index);
  return {
    type: DELETE_COMMENT,
    payload: index
  };
};
