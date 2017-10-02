// export const ADD_TODO = 'ADD_TODO';

// let nextTodoId = 0;
// export const addTodo = () => {
// 	return {
// 		type: ADD_TODO,
// 		text: '',
// 		completed: false
// 	}
// }


let nextTodoId = 0
export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}