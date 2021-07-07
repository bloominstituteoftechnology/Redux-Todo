export const CREATE_TODO = 'CREATE_TODO';
export const HANDLE_CLICK = 'HANDLE_CLICK'; 

export const createTodo = todo => {
    return { type: CREATE_TODO, payload: todo };
};

export const handleClick = (index, todos) => {
    return { type: HANDLE_CLICK, payload: {
        index: index, 
        todos: todos
    }}
}