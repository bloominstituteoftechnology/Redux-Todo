import { ADD_TODO, DELETE_TODO } from '../Actions';

export const todoReducer = (todo = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...todo,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case DELETE_TODO:
        const newTodos = todos.filter(todo => {
            return todo.id !== action.id
        });
            
    }
}

