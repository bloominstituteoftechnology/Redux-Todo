import { ACTIONS } from '../Actions';

 const initialState = {
    todos:[
        {
        id: 0,
        text: 'First Todo',
        completed: false
        }, 
        {
        id: 1,
        text: 'Second Todo',
        completed: false
        }, 
        {
        id: 2,
        text: 'Third Todo!',
        completed: false
        }]
}

 const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTIONS.ADD_TODO:
            console.log('add');
        return state;

        case ACTIONS.COMPLETE_TODO:
            console.log('complete');
        return state;

        case ACTIONS.DELETE_TODO:
            console.log('delete');
        return state;

        default: 
            console.log('default');
        return state;
    }
}

 export default todoReducer;