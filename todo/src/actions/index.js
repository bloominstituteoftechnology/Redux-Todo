export const ADDITEM = 'ADDITEM';
// export const DELETEITEM = 'DELETEITEM';

export const addItem = (inputValue) => {
    return {
        type: ADDITEM,
        payload: inputValue
    }
}
// export const deleteItem = () => {
//     return {
//         type: DELETEITEM,
//     }
// }
