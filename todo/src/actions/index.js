export const ADDTODO = 'ADDTODO'
export const TOGGLETODO = 'TOGGLETODO'

export const addtodo = todo => {
    return {
        type: ADDTODO,
        payload: todo
    }
}

export const toggletodo = index => {
    return {
        type: TOGGLETODO,
        payload: index
    }
}
