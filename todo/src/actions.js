export const ADD_TODO="ADD_TODO";
export const CLEAR_TODO="CLEAR_TODO";
export const CLICK_TODO="CLICK_TODO";



export function addTodo(text, id){
      let newTodo={
          id: id,
          todo:text,
          completed:false

    }
    return {type:ADD_TODO,payload:newTodo}
}

export function clearTodo(){

    return {type:CLEAR_TODO,payload:""}
}

export function clickTodo(id){

    return {type:CLICK_TODO,payload:id}
}