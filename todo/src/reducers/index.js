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
            completed:false
        }
    ]
}

export default (state=initialState,action)=>{
    switch(action.type){
        case ADD_TODO:
        console.log("ADD_TODO CLICKED");
        return(<div>returned something</div>)

        case CHANGE_COMPLETED:
        console.log("CHANGE_COMPLETED CLICKED");
        return(<div>returned something</div>)

        default:
        return state;

    }
}