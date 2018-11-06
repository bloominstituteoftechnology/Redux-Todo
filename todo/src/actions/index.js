let nextTodoId = 0

// addTodo is the action-object with the type: 'ADD_TODO', but how come no payload? 
// this action-object is connected to AddTodo.js
export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})

// after VisibleTodoList.js

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

// toggle-action connected to VisibleTodoList.js
export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})

// connected to VisibleTodoList.js
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}