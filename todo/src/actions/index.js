export const addItem = item => {
    console.log('in action: ', item);
    return { type: 'ADD_ITEM', id: 0, value: 'walk the dog', completed: false, payload: item };
};
