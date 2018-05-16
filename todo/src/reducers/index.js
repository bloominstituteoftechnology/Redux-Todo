import { addTodo, setVisibilityFilter, toggleTodo } from '../actions';

const todo = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return (
                [...state, { id: action.id, text: action.text, completed: false }]
            );
    }
}