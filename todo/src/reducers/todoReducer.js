
const initialState = {
    todos: [{
        todo: "Learn Javascript",
        completed: false
    }, 
    {
        todo: "Practice Drums",
        completed: true
    }, 
    {
        todo: "Figure out life plan",   
        completed: false
    }]
}
const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_TODO": 
            const newTodos = state.todos.slice().push(action.payload);
            return Object.assign({}, state, {todos: newTodos});
        case "REMOVE_TODOS":
            return Object.assign({}, state, {todos: state.todos.filter(todo => todo.completed === false)});
        case "TOGGLE_COMPLETED":
            return Object.assign({}, state, {todos: state.todos.map(todo => {
                if(todo.todo === action.payload){
                    todo.completed = !todo.completed;
                }
                return todo;
            })});
        default:
            return state;
    }
}

export default todoReducer;