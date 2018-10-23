import {ADD_NEW_TODO} from '../actions/index';

const initialState = {
    input : '',
    todoList : [{
        value : 'add new todo item',
        completed : false,
    }],
}

const addNewTodo = (state = initialState, action) => {
    switch(action.type){
        case ADD_NEW_TODO : 
        console.log("reducers", action.payload);
        return{
            ...state, 
            todo : {value : action.payload}
        };
        default : return state;
    }
}

export default addNewTodo;
// reducers use switch statements
//take in action.type