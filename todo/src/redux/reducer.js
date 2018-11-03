import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from './actions';

const intialState = [
    {
        id: 0,
        title: 'Clean kitchen',
        complete: false,
    },
    {   
        id: 1,
        title: 'Clean kitchen',
        complete: true,
    }
];

// TODO = {id: 0, title: 'Clean garage', }
export const reducer = (state = intialState, action) => {
    
    switch(action.type) {
        case ADD_TODO: 
            return [...state, {id: state.length + 1, title: action.title, complete: false}]

        case UPDATE_TODO:
            return state = state.map(todo =>{
                if (todo.id === action.id) {
                    return {id: todo.id, title: todo.title, complete: !todo.complete};
                }
                return todo;
            })
            
        case DELETE_TODO:
            return state = state.splice(action.id, 1);

        default: 
            return state;
    }
}