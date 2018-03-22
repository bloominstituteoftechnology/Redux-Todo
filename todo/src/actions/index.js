export const ADD = "ADD";
export const SWITCHDO = "SWITCHDO";
export const REMOVE = "REMOVE";

export const remove = (number) =>{
  return {
    type:REMOVE,
    id:number


  }

}
export const addToDo = (addText) =>{
  return {
    type:ADD,
    text:addText,
    completed:false

  }
}
export const switchDo= (number) =>{
  return {
    type:SWITCHDO,
    id:number

  }
}
