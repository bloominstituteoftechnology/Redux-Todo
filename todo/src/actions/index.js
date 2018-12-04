import { ADD_TODO } from '../reducers'

export const addToDo = value => {
    return {
        type: ADD_TODO,
        payload: value
    }
}