import {TOGGLE_TODO, ADD_TODO} from './actions/actions';

const initialState = {

    todos: [  
        {name: "run",
        completed: false},
        {name: 'eat',
    completed: true},
    {name:'Cook', completed: true}
    ]
}
  
function reducer (state = initialState, action)  {
    switch(action.type) {
        case ADD_TODO:
            console.log(action.payload)
            return{
                ...state,
                todos: [...state.todos, action.payload.task]
            };
            case TOGGLE_TODO: 
            return {
                ...state,
                
            }

        default:
            return state
    }
}

export default reducer;