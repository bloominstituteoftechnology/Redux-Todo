//this const is an "action type"

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';


//this const is an "action creator"

export const addTodo = todo => {

  //the obj being returned here is an "action"

  return {
    type: ADD_TODO,
    payload: todo
  }
}

export const toggleTodo = index =>{
  return {
    type: TOGGLE_TODO,
    payload: index
  }
}

//returning an action from an action creator withh run the dispatch function which passes our action to the reducer


