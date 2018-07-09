export const add = (todo) => {
    return {
        type: 'ADD',
        payload: todo
    }
}

export const remove = (todo) => {
    return {
        type: 'REMOVE',
        payload: todo
    }
}

export const complete = (todo) => {
    return {
        type: 'COMPLETE',
        payload: todo
    }
}