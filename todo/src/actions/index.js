export const addTodo = (text) => {
    return {
    type: ADD_TODO,
    id: nextTodoId++,
    text,  //<--ES6. same as text:text, in ES5
    completed: false //<-- initially this is set to false
    }
   }

   export const setVisibilityFilter = (filter) => {
    return {
    type: SET_VISIBILITY_FILTER,
    filter
    }
   }

   export const toggleTodo = (id) => {
    return {
    type: TOGGLE_TODO,
    id
    }
   }