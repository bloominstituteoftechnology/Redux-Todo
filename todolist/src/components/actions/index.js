export const NEW_TODO = 'NEW_TODO';


let newtodo = 0


export const newValue = newTodo => {
    return({

         type: NEW_TODO,
         id: newtodo++,
         todo: newTodo,
        })
}