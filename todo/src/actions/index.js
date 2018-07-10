export const ADD_TODO = 'ADD_TODO';
export const CHANGE_TODO = 'CHANGE_TODO';
export const TOGGLE_COMPLETION = 'TOGGLE_COMPLETION';

export const addTodo = (text) => {
    const todo = {
        text: text,
        completed: false,
        id: Date.now()
    }
    return {
        type: ADD_TODO,
        payload: todo
    }
};

export const changeTodo = (e) => {
    return {
        type: CHANGE_TODO,
        payload: e.target.value
    }
}

export const toggleCompletion = (id, todos) => {
    const newTodos = todos.map(todo => { 
        if(todo.id === id) {
            return Object.assign({}, todo, { completed: !todo.completed })
        }
        return todo;
    });
    return {
        type: TOGGLE_COMPLETION,
        payload: newTodos
    }
}