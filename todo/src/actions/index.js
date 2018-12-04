import { ADD_TODO } from '../reducers'

export const addToDo = item => {
    return {
        type: ADD_TODO,
        payload: item
    }
}