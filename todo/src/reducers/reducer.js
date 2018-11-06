import * as todoActionTypes from '../actionTypes';

const initialState =  [ 
            { value: 'Item 1 needs to be done', completed: false }, 
            { value: 'Item 2 needs to be done', completed: false} 
                      ]


export let todoLength = initialState.length;

export default function Reducer( state=initialState, action) {
    switch(action.type) {
        case todoActionTypes.ADD_TODO:
            return [...state, {...action.payload, id: state.length + 1}];

        case todoActionTypes.UPDATE_TODO:
            const update = state.map(item => {
                if(item.id === action.id) {
                  return {...item, completed: !item.completed}
                }
                return item
              })
            return update


        case todoActionTypes.TOGGLE_TODO:
        return state.map( todo => {
             if(todo.id === action.id) {
                 return {
                     ...todo, 
                     completed:!todo.completed
                 }
             }
        })

        case todoActionTypes.DELETE_TODO:
        return [
            ...state.slice(0, action.id),
            ...state.slice(action.id + 1)
        ];

       
        default:
         return state;
    }
}