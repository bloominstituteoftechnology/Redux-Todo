export const MARK_DONE = 'MARK_DONE';

export const markDone = (id) => (
    { 
        type: MARK_DONE,
        payload: {
            id
        } 
    }
);