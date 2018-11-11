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
    console.log('got to the reducer at least?')
    switch(action.type){
        case ADD_TODO:
        console.log("ADD_TODO CLICKED");
        

        case CHANGE_COMPLETED:
        console.log("CHANGE_COMPLETED CLICKED");
        

        default:
        return state;

    }
}