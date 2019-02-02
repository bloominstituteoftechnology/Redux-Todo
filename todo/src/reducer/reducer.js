

let initialState = {
    title:"My To Dos",
    todos: [
        {
            todo: "Walk around",
            completed: false
        },
        {
            todo: "sit down",
            completed: false
        }
    ]
}

export default function reducer (state = initialState, action) {
    return state;
}