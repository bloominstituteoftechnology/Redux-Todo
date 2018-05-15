import { todo } from '../actions'; 

export default (todo, action) => { 
    switch (action.type) {
        case todo: 
        return (todo.action.payload)    
        case todo2:
        return (todo.action.payload)
        default:
            return todo;    
    }
}