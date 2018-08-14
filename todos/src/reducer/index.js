
const initialState = {
    todos: [
        { id: 0,
          task: "Mow the lawn", 
          completed: false  
        }, 
        {
           id: 1,
           task: "Do the dishes", 
           completed: false
        }, 
        {
            id: 2, 
            task: "Fold the laundry", 
            completed: false
        }, 
        {
            id: 3, 
            task: "Buy dog food", 
            completed: false
        }
    ]
}
export default (state = initialState, action) => {
    switch(action.type) {
        case('ADD_TODO'):
            return{
                todos: [...state.todos, action.payload]
            }
        case('TOGGLE_TODO'):
            let updatedToggles = state.todos.map((item) => {
                if(item.id === action.payload){
                    item.completed = !item.completed
                    return item;
                }else {
                    return item; 
                }
            })
            return {
               todos: updatedToggles
            }
        case('DELETE_TODO'): 
        let updatedArray = state.todos.filter(item => item.id !== action.payload)
        return {
            todos: updatedArray
        }    
        default: 
            return state;
    }
}