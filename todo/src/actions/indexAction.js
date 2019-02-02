export const ADDTODO = 'ADDTODO';

export function addTodo(text){
    let newTodo = {
        todo: text,
        complete: false
    };
    return {type: 'ADDTODO', payload: newTodo};
}