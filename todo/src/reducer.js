 import {ADD_TODO} from "./actions"

let initialState= {

     title:"My Redux Todo App",
     todos:[
        {
             todo:"walk the dog",
             completed:false
         }
     ]


 }


//reducer returns an object,when it is called for the first time itdoesnt have action
export default function reducer(state =initialState,action){
   switch(action.type){

       case ADD_TODO:
         //return Object.assign( {}, state, {title:action.title})
       //or return (...state,{title:action.title})
           //returns a brand new array
           let newTodos =     [...state.todos, action.payload];
           return Object.assign({},state,{todos:newTodos})


        default:return state;


   }




}
