export const localState = () => {
    try {
        const local = localStorage.getItem('state');
        if (local === null) return;
        return JSON.parse(local);
    }
    catch (err) {
        return;
    }
};

export const saveState = (state) => {
    try {
        const local = JSON.stringify(state);
        localStorage.setItem('state', local);
    }
    catch (err) {
        console.error(err);
    }
}