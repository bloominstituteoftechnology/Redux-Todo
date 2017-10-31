export const ADDITEM = 'ADDITEM';
export const REMOVEITEM = 'REMOVEITEM';

let id = 0;

export const addItem = (text) => {
  return {
    type: ADDITEM,
    text,
    id: id++,
  }
};


export const removeItem = (id) => {
  return {
    type: REMOVEITEM,
    id,
  }
};