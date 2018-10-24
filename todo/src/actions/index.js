

export const addTodo = value => {
    console.log(value)
    return{
    type: "ADD_TODO",
    payload: value
    }
}

export const toggleTodo = id => ({
        type: "TOGGLE_TODO",
        payload: id
})

