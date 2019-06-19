//import actions
import React from 'react';
import{ADD_TODO, CHANGE_COMPLETED} from '../actions/index.js';

const initialState={
    todos:[
        {
        value:'first sample todo',
        completed: false
        },{
            value:'second sample todo',
            completed:false
        },{
            value:'third sample todo',
            completed:true
        }
    ]
}

export default (state=initialState,action)=>{
    switch(action.type){

        case ADD_TODO:
        let newState=state.todos.slice();
        newState.push(action.payload);

        console.log(action.payload)
        return Object.assign({}, state, {todos:newState});
        

        case CHANGE_COMPLETED:

        let newTodos=state.todos.slice();

        newTodos.map((todo)=>{
            if(todo.value===action.payload.value){
                todo.completed = !todo.completed;
                return(todo);
            }
            return(todo);
        })
        

        return Object.assign({}, state, {
            todos:newTodos
        });
        

        default:
        return state;

    }
}