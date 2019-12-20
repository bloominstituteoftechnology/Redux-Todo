export const ADD_TODO = "ADD_TODO";
export const COMPLETED ="COMPLETED";
export const DELETED ="DELETED";

export const addTodo = (todo) =>{
  return { 
    type: ADD_TODO, 
    payload: { todo: todo}
  }
}

export const completeTodo = id => {
  return {
    type: COMPLETED,
    payload: id
  };
};

export const deleteTodo = id =>{
  return{
    type:DELETED,
    payload: id
  }
}