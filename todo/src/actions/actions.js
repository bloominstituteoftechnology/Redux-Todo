export const ADDTODO = 'ADDTODO';
export const REMOVETODO = 'REMOVETODO';
export const TOGGLETODO = 'TOGGLETODO';

export const addTodo = (todo, id) => {
 return {type: ADDTODO, payload: todo, id: id}
}

export const removeTodo = (id) => {
 return {type: REMOVETODO, payload: id}
}

export const toggleTodo = (id) => {
 return {type: TOGGLETODO, payload: id}
}