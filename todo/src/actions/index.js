import { ADD_TODO, TOGGLE_TODO } from "../reducers";
import {store} from '../index';

export const addTodo = (todo, completed) => {
    console.log("clicked")
    
    

    store.dispatch({
        type: ADD_TODO,
        payload: {value: todo, completed: completed}
    })
}



