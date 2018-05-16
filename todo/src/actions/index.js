export const CREATE_LIST = "CREATE_LIST";
export const ADD_TODO = "ADD_TODO";
export const COMPLETION = "COMPLETION";

export const createList = () =>{
    return {
        type: 'CREATE_LIST',
        payload: [],
    }
};


export const addToDo = todo => {
    return {
        type: "ADD_TODO",
        payload: todo,
    }
}

