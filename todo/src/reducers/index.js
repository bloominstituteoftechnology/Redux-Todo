import {ADD_NEW_TODO} from '../actions/index';

const initialState = {
    input : '',
    todo : [{
        value : '',
        completed : false,
    }],
}

const addNewTodo = (state = initialState, action) => {
    switch(action.type){
        case ADD_NEW_TODO : return{...state, todo : action.payload};
        default : return state;
    }
}

export default addNewTodo;
// reducers use switch statements
//take in action.type