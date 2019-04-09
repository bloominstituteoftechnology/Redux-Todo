export const ADDTODO = 'ADDTODO';
export const TOGGLECOMPLETE = 'TOGGLECOMPLETE';
export const DELETETODO = 'DELETETODO';

export const addtodo = newTodo => {
    // console.log(title);
    return {
      type: ADDTODO,
      payload:{
          newTodo,
          id: Date.now(),
          completed:false
      }
    };
  };

  export const togglecomplete = newTodo =>{
      console.log(newTodo)
    return{
        type: TOGGLECOMPLETE,
        payload:{
            ...newTodo,
            completed:!newTodo.completed
        }
        
    }
  }

  