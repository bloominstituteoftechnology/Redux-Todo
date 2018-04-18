export const ADDTODO = 'ADDTODO'
export const TOGGLETODO = 'TOGGLETODO'

let todoId = 0;

export const addtodo = text=> {
    return {
        type: ADDTODO,
        payload: {
            todo: text,
            completed: false,
            id: todoId++
        }
    }
}

export const toggletodo = index => {
    return {
        type: TOGGLETODO,
        payload: index
    }
}
