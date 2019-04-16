export const ADD_THING = 'addThing';
export const TOGGLE_THING = 'toggleThing';

export function addThing(newThing) {
  return {
    type: ADD_THING,
    payload: newThing
  };
}

export function toggleThing(index) {
  return {
    type: TOGGLE_THING,
    payload: index
  };
}
