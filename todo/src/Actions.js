


function addTodo(text) {
    return {
      type: 'ADD_TODO',
      text: text,
      completed: false,
    }
  }

  export default addTodo
