export const loadState = () => {
  //wrap in a try block in case local storage fail
  //because of privacy settings on browser
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      //Returning undefined so if something goes wrong
      //the app wont crash
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    //state is serialized into a string with JSON
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch {}
};
