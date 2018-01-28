// Attempt to grab state from local storage if it exists
// If it doesn't or there's an error, let the redux reducers handle state instead
export const loadFromStorageToState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } 
  catch (err) {
    return undefined;
  }
};

// Attempt to save state to local storage, log error if it doesn't work
export const saveToStorageFromState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  }
  catch (err) {
    console.error('LocalStorage Error: ', err);
  }
};