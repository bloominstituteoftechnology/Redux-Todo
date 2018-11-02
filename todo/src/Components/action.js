//develop strings for actions
export const ADD = "ADD"
export const CLEAR = "CLEAR"

//methods return action.type
export const add = () => {
   return {type: ADD}
}

export const clear = () => {
   return {type: CLEAR}
}