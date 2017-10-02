export const NEWTODO = 'NEWTODO';
export const COMPLETE = 'COMPLETE';
export const DELETE = 'DELETE';
export const INITIAL = 'INITIAL';
export const DELETEALL = 'DELETEALL';
export const DELETECOMPLETED = 'DELETECOMPLETED';
export const COPY = 'COPY';

export const copy= (index) => {
    return {
        type: COPY,
        payload: index
    }
}
export const deleteCompleted = () => {
    return {
        type: DELETECOMPLETED
    }
}
export const deleteAll = () => {
    return {
        type: DELETEALL
    }
}

export const newToDo = (item) => {
    return {
        type: NEWTODO,
        payload: {
            name: item,
            completed: false
        }
    }
}

export const complete = (index) => {
    return {
        type: COMPLETE,
        payload: index
    }
}

export const deleter = (index) => {
    return {
        type: DELETE,
        payload: index
    }
}

export const initial = () => {
    return {
        type: INITIAL
    }
}