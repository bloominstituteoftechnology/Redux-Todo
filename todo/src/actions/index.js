

export const addTodo = (todo) => {
    console.log("in Action ", todo);
     return { 
         type: 'ADDTODO',
         payload : todo
    }; };
