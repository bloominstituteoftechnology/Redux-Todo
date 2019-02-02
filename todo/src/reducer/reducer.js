import { ADD_TODO, TOGGLE_TODO } from '../actions/actions';


const initialState = {
    todos: []
};

export default function reducer(state = initialState, action) {
    console.log(action.todo)
    switch (action.type) {
        case 'ADD_TODO':
        return {
            ...state,
            todos: [...state.todos, { value: action.todo, completed: false }]
          }
        case 'TOGGLE_TODO':
        console.log(action.todo)
            return Object.assign({}, state, {
                todos: state.todos.map(todo => {
                    if(todo.value === action.todo) {
                        return Object.assign({}, todo, {
                            completed: !todo.completed
                        })
                    }
                    return todo
                })
            })
            
          
        default:
            return state;
    }
}