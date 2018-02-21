export const ADD = "ADD";
export const COMPLETE = "COMPLETE";

export const add = () => {
  return {
    type: ADD,
    payload: {
      value: "TESTING",
      complete: true,
    }
    };
};

export const complete = () => {
  return {
    type: COMPLETE,
    payload: true,
    };
};