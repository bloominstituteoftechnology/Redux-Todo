export const input_Value = value => {
    return { type: 'INPUT_VALUE', payload: value }; 
};

export const submit_Todo = todo => {
    return { type: 'SUBMIT_TODO', payload: todo }; 
};

export const toggle_Completed = id => {
    return { type: 'TOGGLE_COMPLETED', payload: id }; 
};

export const remove_Todo = (id) =>{
    return { type: 'REMOVE_TODO', payload: id};
}