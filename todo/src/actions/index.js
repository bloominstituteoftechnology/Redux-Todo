export const TOGGLE = 'TOGGLE'
export const ADD = 'ADD'

export const add = (event) => {
  return {
    type: ADD,
    data: event
  }
}

export const toggle = (index) => {
  return {
    type: 'TOGGLE',
    data: index
  }
}

