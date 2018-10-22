export const ADDTODO = 'ADDTODO';
export const TOGGLETODO = 'TOGGLETODO';

export const addtodo = () => {
    return {
      type: ADDTODO
    };
  };
  
  export const toggletodo = () => {
    return {
      type: TOGGLETODO
    };
  };