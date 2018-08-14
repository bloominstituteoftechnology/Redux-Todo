
export const add = (payload) => ({
  type:'ADD',
  payload:payload
});

export const toggleCheck = (payload) => ({
  type:'TOGGLECHECK',
  payload:payload
});

export const removedChecked = (payload) => ({
  type:'REMOVECHECKED',
  payload:payload
});