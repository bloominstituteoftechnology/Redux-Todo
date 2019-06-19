export const ADDTODO = 'ADDTODO';
export const REMOVETODO = 'REMOVETODO';
export const TOGGLETODO = 'TOGGLETODO';

export const addTodo = (todo, id) => {
 return {type: ADDTODO, payload: todo, id: id}
}

export const removeTodo = (index) => {
 return {type: REMOVETODO, payload: index}
}

export const toggleTodo = (index) => {
 return {type: TOGGLETODO, payload: index}
}