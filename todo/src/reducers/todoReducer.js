import { ADD_TODO, TOGGLE_TODO } from '../actions';

const initialState = {
    todo: 'Todo from Redux store'
};

export const reducer(state = initialState, action) => {
    console.log('reducer - action: ', action);
    switch (action.type) {
        case ADD_TODO:
            console.log('add_todo', action);
            const newTodo = {'':action.payload};
            return {
                ...state,
                todo: {
                    ...state.todo, newTodo
                },
        case TOGGLE_TODO:
            return {
                ...state,
                todo: state, todo.map((todo, index) => 
                action.payload === index
                return 
                    {todo}
                
            }        
                }
            }
            };
        default:
            return state;
    }
