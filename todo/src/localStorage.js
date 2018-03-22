export const loadState = () => {
    try {
        const previousState = localStorage.getItem('state');
        return !previousState ? undefined : JSON.parse(previousState);
    } catch (err) {
        return undefined;
    }
}
export const saveState = (state) => {
    try {
        const currentState = JSON.stringify(state);
        localStorage.setItem('state', currentState);
    } catch (err) {
        console.log('state could not be persisted');
    }
}