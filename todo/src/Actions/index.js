export const ADD_LIST_ITEAM = 'ADD_LIST_ITEAM';

let nextTodoId = 0;
export const add_list_iteam  = (iteam) => {
  return {
    type: ADD_LIST_ITEAM,
    text : iteam
  };
}

export const CHECK_COMPLETE = 'CHECK_COMPLETE'
export const Check_complete = (iteamName) => {
  return {
    type: 'CHECK_COMPLETE',
    iteamToCheck: iteamName
  };
}

export const REMOVE_LIST_ITEAM = 'REMOVE_LIST_ITEAM'
export const remove_list_iteam = (iteamName) => {
  return {
    type: 'REMOVE_LIST_ITEAM',
    iteamToRemove: iteamName
  };
}