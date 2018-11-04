export const addTodo = todo => ({
    type: 'addTodo',
    payload: todo
})

export const UPDATE_NAME = "UPDATE_NAME"

export const updateName = (payload) => {
    return {
        type: UPDATE_NAME,
        payload: payload,
        // returning on object (payload, l7) with a type and some data (l9, 10) that we supply
    }
}