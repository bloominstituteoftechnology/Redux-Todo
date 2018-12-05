import { ADD, DELETE } from './Reducer';

export const add = (input) => {
  
  return {
    type:ADD,
    payload:input
  }
};

export const deletes = (index) => {
  
  return {
    type:DELETE,
    payload:index
  }
};