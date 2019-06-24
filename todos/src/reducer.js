import {TOGGLE_TODO, ADD_TODO} from './actions/actions';

const initialState = {

    todos: [  
        {name: "run",
        completed: false, id:0},
        {name: 'eat',
    completed: true, id: 1},
    {name:'Cook', completed: true, id:2}
    ]
}
  
function reducer (state = initialState, action)  {
    switch(action.type) {
        case ADD_TODO:
            console.log(action.payload)
            return{
                ...state,
                todos: [...state.todos, action.payload]
            };
            case TOGGLE_TODO: 
            console.log(action.payload)
            return {
                ...state,
                todos: state.todos.map((todo, index) => 
                action.payload === index?
                {...todo, completed: !todo.completed }
                :todo)
                
            };

        default:
            return state
    }
}

export default reducer;