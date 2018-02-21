export const COMPLETE = 'COMPLETE';
export const UNCOMPLETE = 'DECREMENT';

export const complete = () => {
  return {
    type: COMPLETE,
  };
};

export const uncomplete = () => {
  return {
    type: UNCOMPLETE,
  };
};
