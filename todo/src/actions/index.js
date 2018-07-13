export const addTodo = text => ({
    type : 'ADD_TODO',
    id : Date.now(),
    text,
    completed : false
})

export const toggleTodo = id => ({
    type : 'TOGGLE_TODO',
    id,

})

export const setVisibilityFilter = filter => ({
    type : 'SET_VISIBILITY_FILTER',
    filter
})