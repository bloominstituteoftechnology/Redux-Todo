import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "../reducers";
import {store} from '../index';

export const addTodo = (todo, completed) => {
    store.dispatch({
        type: ADD_TODO,
        payload: {value: todo, completed: completed}
    })
}

export const toggleTodo = event => {
    const find = event.target.innerHTML.split('----')

    store.dispatch({
        type:TOGGLE_TODO,
        payload: find[0].trim()
    })


}

export const removeTodo = () => {
    store.dispatch({
        type: REMOVE_TODO
    })
}

export const trashTodo = event => {
    const find = event.target.innerHTML.split('----')
    
    store.dispatch({
        type: REMOVE_TODO,
        payload: find[0].trim()

    })
}



