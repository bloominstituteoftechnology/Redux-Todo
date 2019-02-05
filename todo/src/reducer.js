import {ADD_TODO, CLEAR_TODO, CLICK_TODO} from "./actions"

let initialState= {

     title:"My Redux Todo App",
     todos:[

     ]


 }


//reducer returns an object,when it is called for the first time itdoesnt have action
export default function reducer(state =initialState,action){

    console.log(action)
    switch(action.type){

       case ADD_TODO:
         //return Object.assign( {}, state, {title:action.title})
       //or return (...state,{title:action.title})
           //returns a brand new array

           let newTodos =     [...state.todos, action.payload];
           return Object.assign({},state,{todos:newTodos})


       case CLEAR_TODO:
           newTodos = [...state.todos]
           console.log(newTodos)
           newTodos = newTodos.filter(todo => {
               return (todo.completed == false);
           })
           console.log(newTodos)
           return Object.assign({},state,{todos:newTodos})


        case CLICK_TODO:

           /*
            * We come here for two reasons:
            * 1. To mark it for deletion (this means an unmarked todo was clicked) :
            *   Action to take: set completed as true
            * 2. To unmark it for deletion(This means a marked todo was clicked) :
            *   Action to take: set completed as false
            *
            *   This means that we need to toggle .complete flag of todo which was clicked.
            *
            */
           let todos = [...state.todos]

           console.log(todos);
           /*
            * action.payload contains the id of todo which was clicked.
            * Loop through all todos and find the todo with matching id (i.e. action.payload).
            * Once we find it, we will toggle the .completed flag of that todo.
            */
           for (let i=0; i < todos.length; i++) {
               if (todos[i].id == action.payload) {
                   //todos[i].completed = true;
                   todos[i].completed=!todos[i].completed
                   // if (todos[i].completed) {
                   //     todos[i].completed = false;
                   // } else {
                   //     todos[i].completed = true;
                   // }

               }
           }
           console.log(todos);
           console.log("Todo added...");
           return Object.assign({},state,{todos:todos})

       default:
            console.log("Unkown action ")
            return state;


   }




}
// todos[i].completed=!todos[i].completed