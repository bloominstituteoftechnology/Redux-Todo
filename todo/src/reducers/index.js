import {ADD} from '../actions';

export default(todos = [], action) =>{
    console.log(action);
    switch(action.type){
        case ADD:
            return [...todos, action.payload];
        default:
            return todos;
    }
}