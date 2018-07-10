
const initialState = {
    todos: [{
        todo: "Learn Javascript",
        completed: false
    }, 
    {
        todo: "Learn Redux",
        completed: true
    }, 
    {
        todo: "Profit",   
        completed: false
    }],
    newTodo: '',
}
const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_TODO": 
            const newTodos = state.todos.concat(action.payload);
            return Object.assign({}, state, {todos: newTodos, newTodo: ""});
        case "REMOVE_TODOS":
            return Object.assign({}, state, {todos: state.todos.filter(todo => todo.completed === false)});
        case "TOGGLE_COMPLETED":
            return Object.assign({}, state, {todos: state.todos.map(todo => {
                if(todo.todo === action.payload){
                    todo.completed = !todo.completed;
                }
                return todo;
            })});
        case "HANDLE_NEW_TODO":
            return Object.assign({}, state, {newTodo: action.payload})
        default:
            return state;
    }
}

export default todoReducer; 