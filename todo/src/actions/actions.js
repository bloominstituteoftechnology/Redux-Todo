export const ADDTODO = 'ADDTODO';
export const REMOVETODO = 'REMOVETODO';
export const TOGGLETODO = 'TOGGLETODO';


export const addTodo = (todo) => {
 return {type: ADDTODO, payload: todo}
}

export const removeTodo = (todo) => {
 return {type: REMOVETODO, payload: {todo: todo}}
}

export const toggleTodo = () => {
 return {type: TOGGLETODO}
}