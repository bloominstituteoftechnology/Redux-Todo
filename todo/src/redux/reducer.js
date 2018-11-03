import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from './actions';

const intialState = {
    newTitle: '',
    todoCards: [{
        id: 0,
        title: 'Clean kitchen',
        complete: false,
    }]
};

// TODO = {id: 0, title: 'Clean garage', }
export const reducer = (state = intialState, action) => {
    switch(action.type) {
        case ADD_TODO: 
            return [...state, { id: state.todoCards.length + 1, title: action.title, complete: false }]

        case UPDATE_TODO:
            console.log(action);
            return state.todoCards.map(todo =>{
                if (todo.id === action.id) {
                    return {...todo, complete: !todo.complete};
                }
                return todo;
            })
        case DELETE_TODO:
            return

        default: return state;
    }
}