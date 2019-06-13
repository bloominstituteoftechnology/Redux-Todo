import React, { Component } from 'react';
import { connect } from 'react-redux';

const initialState = {
    "tasksList": [
        {
            "task": "learn redux",
            "id": 1,
            "completed": false        
        },
        {
            "task": "master react",
            "id": 2,
            "completed": false        
        }
    ]        
}

export const reducers = (state = initialState, action) => {
    switch (action.type) {

        case "ADD_TASK":
            return Object.assign({}, state, { tasksList: [...state.tasksList, action.payload] });

        case "COMPLETE_TASK":
            const id = action.payload ;
            const tasksList = state.tasksList.map(mapTask => {
                if (mapTask.id === id) {
                    mapTask.completed = !mapTask.completed ;
                    return mapTask ;
                } else {
                    return mapTask ;
                }
            });
            return Object.assign({}, state, {  })
    }
}