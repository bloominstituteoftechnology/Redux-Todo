export const ADDTODO = 'ADDTODO';
export const TOGGLETODO = 'TOGGLETODO';
export const CLEARCOMPLETED = 'CLEARCOMPLETED';

export const addtodo = inputText => {
    return {
      type: ADDTODO,
      inputText
    };
  };
  
  export const toggletodo = id => {
    return {
      type: TOGGLETODO,
      id
    };
  };

  export const clearcompleted = () => {
    return {
      type: CLEARCOMPLETED
    };
  };