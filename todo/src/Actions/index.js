export const ADDTODO = 'ADDTODO'
export const DELETETODO = 'DELETETODO'
export const TOGGLETODO = 'TOGGLETODO'

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

export const toggleToDo = id => {
    return {
        type:TOGGLETODO,
        payload:id
    }
}