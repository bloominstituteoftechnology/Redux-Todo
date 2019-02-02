export const ADD = "ADD";
export const TOGGLE = "TOGGLE";

export function add() {
  type: ADD;
}

export function toggle(status) {
  type: TOGGLE;
}
