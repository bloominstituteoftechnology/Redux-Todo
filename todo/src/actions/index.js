

// export const addTodo = todo => ({
//     type: 'addTodo',
//     payload: todo
// })

// export const UPDATE_NAME = "UPDATE_NAME";


// export const UPDATE_NAME = "UPDATE_NAME"

// export const updateName = (nameInput) => {
//     console.log("hi from update name")
//     return {
//         type: UPDATE_NAME,
//         payload: nameInput,
//         // returning on object (payload, l7) with a type and some data (l9, 10) that we supply
//     }
// }

export const ADD = (text) => {
    return {
        type: ADD,
        text: text
    }
}