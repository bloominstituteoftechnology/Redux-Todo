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
           let todos = [...state.todos]

           console.log(todos);
           for (let i=0; i < todos.length; i++) {
               if (todos[i].id == action.payload) {
                   //todos[i].completed = true;
                   todos[i].completed=!todos[i].completed

               }
           }
           console.log(todos);
           return Object.assign({},state,{todos:todos})

       default:
            console.log("Unkown action ")
            return state;


   }




}
// todos[i].completed=!todos[i].completed