import { ADD_TODO, TOGGLE_TODO } from "../reducers";
import {store} from '../index';

export const addTodo = (todo, completed) => {
    console.log("clicked")
    
    

    store.dispatch({
        type: ADD_TODO,
        payload: {value: todo, completed: completed}
    })
}

export const toggleTodo = event => {
    const find = event.target.innerHTML.split('----')
    console.log(find[0])
    console.log(find[0].length)

    store.dispatch({
        type:TOGGLE_TODO,
        payload: find[0].trim()
    })


}



