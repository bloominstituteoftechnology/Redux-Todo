import { ADDITEM } from '../actions';

export default (state = [], action) => {
    switch(action.type) {
        case ADDITEM:
            return this.state = [...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false,
                }]
        default:
            return state;
    }
}