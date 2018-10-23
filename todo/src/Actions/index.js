export const ADDTODO = 'ADDTODO'
export const DELETETODO = 'DELETETODO'
export const GETTODOS = 'GETTODOS'


export const addToDo = toDo => {
    return {
        type:ADDTODO,
        payload:toDo
    }
}
export const deleteToDo = id => {
    return {
        type:DELETETODO,
        payload:id
    }
}
export const getToDos = () =>{
    return {
        type:GETTODOS,
        payload:''
    }
}