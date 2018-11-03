// https://egghead.io/lessons/javascript-redux-persisting-the-state-to-the-local-storage

export const loadState = () => {
    try {
        // loadstate looks into localstorage and trys to parse it as JSON, if it exists
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState)
    } catch (err) {
        return undefined;
        // If something goes wrong then it returns undefined
        // and reducers initialize the application.
    }
};

// Saves state to local storage.
// Does the reverse of loadState()
export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState)
    } catch (err) {
        // ignore
    }
}