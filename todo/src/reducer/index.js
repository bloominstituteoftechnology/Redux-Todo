export const initialState = {
    todos: [{task: "Finish to-do list", completed: false}]
}

export default function todoReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_TODO":
          let newTodoList = [...state.todos, action.payload]
            
          default:
          return state;
    }
}