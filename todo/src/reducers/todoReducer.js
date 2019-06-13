
const initialState = {
    todos: localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [],
    newTodo: '',
}
const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_TODO": 
            if(action.payload !== ""){
                const newTodos = state.todos.concat(action.payload);
                localStorage.setItem('todos', JSON.stringify(newTodos));
                newTodos.map((todo,index) => localStorage.setItem(`todo${index}`, todo.todo));
                return Object.assign({}, state, {todos: newTodos, newTodo: ""});
            }
            else{
                return state;
            }
        case "REMOVE_TODOS":
            const newTodos = state.todos.filter(todo => todo.completed === false);
            localStorage.setItem('todos', JSON.stringify(newTodos));
            return Object.assign({}, state, {todos: newTodos});
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