import { ADD } from '../actions/AddAction';

export default (state = [], action) => {
    switch (action.type) {
        case ADD:
        
        return [ ...state, 
            {
                id: action.id,
                text: action.text,
                completed: false
            }
        ]
        default:
            return state;
    }
}