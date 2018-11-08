export const ADDTODO = 'ADDTODO';
export const REMOVETODO = 'REMOVETODO';
export const TOGGLETODO = 'TOGGLETODO';


export const addTodo = () => {
 return {type: ADDTODO}
}

export const removeTodo = () => {
 return {type: REMOVETODO}
}

export const toggleTodo = () => {
 return {type: TOGGLETODO}
}