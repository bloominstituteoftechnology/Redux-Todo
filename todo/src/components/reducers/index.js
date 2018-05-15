import { ADD_TODO, TOGGLE } from '../actions'

export default (state = [], action) => {
    switch(action.type){
        case 'ADD_TODO':
            return state.concat({text: action.payload, completed: false});
        case 'TOGGLE':
            return state.map((state, index)=>{
                if(index === action.index){
                    return state.concat({}, state, {completed: !state.completed}
                    )
                }
                else{
                    return state;
                }
            })
        default:
        return state;
    }
}