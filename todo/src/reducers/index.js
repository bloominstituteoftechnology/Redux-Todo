//reducers will live here
//remember to import actions
import { ADD_TODO } from '../actions';
import { TOGGLE_STRIKE } from '../actions';

const initialState = [
    {
        text: 'Study for test',
        completed: false,
    }
];

export default (state = initialState, action) => {
    let newObj;
    switch (action.type) {
        
        case ADD_TODO:
            newObj = [...state]
            newObj.push(action.payload)
        return newObj;

        case TOGGLE_STRIKE:
            newObj = [...state];
            newObj[action.payload].completed = !newObj[action.payload].completed
            return newObj
        default:  //used when other cases don't apply
        return state;
    }
}
