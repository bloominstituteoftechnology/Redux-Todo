export const doneToDo = (array) => {
    return {
        type: 'ListItem_completed',
        payload: array
        
    };
};