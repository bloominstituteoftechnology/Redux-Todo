export const ADD = "ADD";
let TodoID = 0;

export const addText = (text) => {
    return {
        type: "ADD",
        text: text,
        id: TodoID++,
    }
}


// export const increment = () => {
//     return {type: "INCREMENT"}
//   };