import {ADD} from '../actions'

export default (todo = [], action) =>{
  switch(action.type){

    case ADD:
   // const newTodo = todo.push(action.payload)
    //what it should do
      //return newTodo;
      return [...todo, action.payload]
    default:
     return todo;
  }
}