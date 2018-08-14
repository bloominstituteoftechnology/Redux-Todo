
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
    return {

    }
}