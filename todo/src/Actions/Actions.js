export const ADDTODO = 'ADDTODO';
export const COMPLETETODO = 'COMPLETETODO';

export const addTodo = (todo) => {
  return ({
    type: ADDTODO,
    payload: todo,
  })
}

export const completeToDo = (e) => {
  return({
    type: COMPLETETODO,
    component: e.target.innerText,
  })
}
