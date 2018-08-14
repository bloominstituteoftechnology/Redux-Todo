import {ADD_TODO,TOGGLE_ITEM} from '../actions';

const initialState={
    todos:[]
}
export default function toDoApp(state=initialState,action) {
    switch(action.type) {
        case ADD_TODO:
        return Object.assign({},state,{
            todos:[...state.todos,{
                value:action.value,
                completed:false
            }
        ]
        })
        case TOGGLE_ITEM:
        return Object.assign({},state, {
            todos: state.todos.map((todo, index) => {
              if (index === action.index) {
                  console.log(todo)
                return Object.assign({}, todo, {
                  completed: !todo.completed
                })
              }
            }
        )
    });
        default: 
            return state
    }
}