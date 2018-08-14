export const ADD_TODO = 'ADD_TODO';

export const addTodo = newTodo => ({
    type: ADD_TODO,
    payload: newTodo
})

// export const setVisibilityFilter = filter => ({
//     type: 'SET_VISIBILITY_FILTER',
//     filter
// })

// export const toggleTodo = id => ({
//     type: 'TOGGLE_TODO',
//     id
// })

// export const VisibilityFilters = {
//     SHOW_ALL: 'SHOW_ALL',
//     SHOW_COMPLETED: 'SHOW_COMPLETED',
//     SHOW_ACTIVE: 'SHOW_ACTIVE'
// }