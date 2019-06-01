
export const TO_DO_CREATE = 'TO_DO_CREATE';
export const TO_DO_DESTROY = 'TO_DO_DESTROY';
export const TO_DO_COMPLETE = 'TO_DO_COMPLETE';
export const TO_DO_CLEAR = 'TO_DO_CLEAR';

export function toDoCreate(toDoTask) {
    return {
        type: TO_DO_CREATE,
        task: toDoTask
    };
};

export function toDoComplete(id) {
    return {
        type: TO_DO_COMPLETE,
        id: id
    };
};

export function toDoDestroy(id) {
    return {
        type: TO_DO_DESTROY,
        id: id
    };
};

export function toDoClear(id) {
    return {
        type: TO_DO_CLEAR
    };
};
