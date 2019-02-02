export const ADDTODO =  'ADDTODO';

export const addTodo = newTodo =>{
  return{
    type: ADDTODO,
    addedTodo: newTodo
  }
}