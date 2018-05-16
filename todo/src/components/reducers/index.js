import { ADD_TODO, TOGGLE, } from '../actions'


const initialState = [
    {text: "Testing", id: Date.now(), completed: false}
]

export default (state = initialState, action) => {
    switch(action.type){
        case 'ADD_TODO':
            return state.concat(action.payload);
        case 'TOGGLE':
            return state.map((todo)=>{
                if(todo.id === action.payload){
                    return Object.assign({}, todo,{completed: !todo.completed})
                }else{
                    return todo;
                }
            })
        default:
        return state;
    }
}