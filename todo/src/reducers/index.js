import {ADD_NEW_TODO} from '../actions/index';
import {TOGGLE_COMPLETED} from '../actions/index';

const initialState = {
    todoList : [{
        value : 'add new todo item',
        completed : false,
    }],
}

const addNewTodo = (state = initialState, action) => {
    switch(action.type){

        case ADD_NEW_TODO : 
        console.log("reducers", action.payload);
        console.log(state)
        return{
            // ...state.todoList, 
            // This did not work but I think I understand why the below works
            todoList : [...state.todoList,{value : action.payload, completed : false}]
        };

        case TOGGLE_COMPLETED :
        return{
            todoList : [...state.todoList, {completed : true}]
        };

        default : return state;
    }
}

export default addNewTodo;
// reducers use switch statements
//take in action.type