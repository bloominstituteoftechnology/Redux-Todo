
const initialState = {
    todos: [{
        todo: "Learn Javascript",
        completed: false
    }, 
    {
        todo: "Practice Drums",
        completed: false
    }, 
    {
        todo: "Figure out life plan",
        completed: false
    }]
}
const todoReducer = (todos = initialState, action) => {
    switch(action.type) {
        case "ADD_TODO": 
            return Object.assign({}, todos, {todos: todos.push(action.payload)});
        case "REMOVE_TODOS":
            return Object.assign({}, todos, {todos: todos.filter(todo => todo.completed === false)});
        case "TOGGLE_COMPLETED":
            return Object.assign({}, todos, {todos: todos.map(todo => {
                if(todo.todo === action.payload.todo){
                    todo.completed = !todo.completed;
                }
                return todo;
            })});
        default:
            return todos;
    }
}

export default todoReducer;