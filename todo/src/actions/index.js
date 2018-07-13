export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';


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

export const VisbilityFilters = {
    SHOW_ALL : 'SHOW_ALL',
    SHOW_COMPLETED : 'SHOW_COMPLETED',
    SHOW_ACTIVE : 'SHOW_ACTIVE'
}