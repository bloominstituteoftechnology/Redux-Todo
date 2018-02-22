export const ADDTODO = 'ADDTODO'
export const REMOVETODO = 'REMOVETODO'

let count = 0;
export const addtodo = (value) => {
    // console.log(value)
    count = count + 1;
    return {
        type:ADDTODO,  
        payload: {
            id:count,
            value,
            completed:false
        }
    } 
}

export const removetodo = (id) => {
    return {
        type:REMOVETODO,
        payload:id
    }
}
