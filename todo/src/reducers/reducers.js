import { ADD } from '../actions/actions';
import { COMPLETED } from '../actions/actions';


export default ( todo = [], action) => {
    switch(action.type){
        case ADD:
        console.log(action.payload);
            return [...todo, action.payload];
        case COMPLETED:
            return todo.filter(remove => remove !== action.payload);
        default:
            return todo;
    }
};
