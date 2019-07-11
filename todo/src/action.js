export const MAKE_TASK = 'MAKE_TASK'

export function makeTask(task, account) {
    return {
        type: MAKE_TASK,
        payload: {
            task,
            account,
        }
    }
}