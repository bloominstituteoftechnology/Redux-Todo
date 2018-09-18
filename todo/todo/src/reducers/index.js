import { ADD_TODO } from '../actions'
import { TOGGLE_TODO } from "../actions";

export default function todoReducer (todos = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...todos,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        default:
            return todos
    }
}
