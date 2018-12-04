import { ADD_TASK } from '../reducers';

export const addTask = text => {
    return {
        type: ADD_TASK,
        payload: text,
    }
}

