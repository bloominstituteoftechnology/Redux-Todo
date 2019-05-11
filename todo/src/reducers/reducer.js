import {ADD, REMOVE} from '../actions'

export default (todo = [], action) =>{
  switch(action.type){

    case ADD:
   // const newTodo = todo.push(action.payload)
    //what it should do
      //return newTodo;
      return [...todo, action.payload,]
      case REMOVE:

      const newArr = todo.find((e) =>{
        return e === todo.target.innertext
      
      })
      console.log("we got here")
      return newArr;

    default:
     return todo;
  }
}