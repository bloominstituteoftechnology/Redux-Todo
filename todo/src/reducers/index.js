import {ADD_NEW_TODO, TOGGLE_COMPLETE} from '../actions';

const initialState =  {
    todos: [
    {
    value: 'Walk the dog.',
    completed: false,
    id: Math.random()
  }]
}


export const todoReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_NEW_TODO:
         console.log('action state: ', state.todos.concat(action.payload))
         return Object.assign({}, state, { todos: [...state.todos, action.payload] });
        case TOGGLE_COMPLETE:
         const todoS = state.todos.map(item => {
             if(item.id === action.payload) {
                 item.completed = !item.completed;
                 return item;
                
             } else {
                 return item
             }
         })
            return Object.assign({}, state, { todos: todoS })
        // return state.todos.map(item => {
        //     if (item.id === action.payload) {
        //       return Object.assign({}, item, { completed: [...item.completed, !item.completed] });
        //     } else {
        //       return item;
        //     }
        //   });
    
        default:
         return state;
    }
}