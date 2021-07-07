import {ADDITEM, TOGGLE_ITEM } from '../actions/index';

const initialState = {
       todos:[ {
            id: 0,
            value: 'wash dishes',
            completed: true,
        }
    ]
}
    


export default  (state = initialState, action) =>{
    switch(action.type) {
        case ADDITEM: 
        return {todos: [...state.todos, {value: action.payload, completed: false}]}
        case TOGGLE_ITEM: 
        return state.todos.map(item =>
            (item.id === action.payload) ? {...item, completed: !item.completed} : item)
        default: 
            return state;
    }
}