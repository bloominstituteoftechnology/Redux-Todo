import { ADD_TODO, COMPLETED_TODO, DELETE_TODO } from './actions'


const initialState = {todo:[]};

export default (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO:
        return  {...state, todo:[...state.todo, {name:action.payload, completed:false, id:Date.now()}]};

        case COMPLETED_TODO:
        const newTodoState = state.todo.map(item=>
            (item.id === action.payload)? {...item, completed: !item.completed}:item)
        return {todo:newTodoState};

        case DELETE_TODO:
          return  {todo:state.todo.filter(item => action.payload !== item.id )}

        default:
        return state;
    }
}

