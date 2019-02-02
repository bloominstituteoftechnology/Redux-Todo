export const ADDTODO = 'ADDTODO';
export const TOGGLE = 'TOGGLE';
export const REMOVETODO = 'REMOVETODO';
export const CLEARCOMPLETED = 'CLEARCOMPLETED';

export const addTodo = newTodo =>{
  return{
    type: ADDTODO,
    addedTodo: newTodo 
  }
}

export const toggle = (id) => {
  return{
    type: TOGGLE,
    id: id
  }
}

export const removeTodo = (id) => {
  return{
    type: REMOVETODO,
    id: id
  }
}

export const clearCompleted = () => {
  return{
    type: CLEARCOMPLETED
  }
}