//Filler file, simply for forcing a pull request. May be repurposed in the future to a scratchpad.


import { createStore } from "redux"; // the method that redux uses to create our data storage

// reducer - responsible for updating the storage... our data. They are a representation of our state.
const initialState = [
    { name: "Fred Flintstone", age: 32 },
    { name: "Wilma Flintstone", age: 31 }
];
const userReducer = (state = initialState, action) => {
    // a function that returns an object.
    if (action.type === "BIRTHDAY") {
    // add 1 year to fred's life.
    return state.map(item => {
        if (item.name === action.payload.name) {
        item.age += 1;
        return item;
        }
        return item;
    });
    }
    return state;
};

// createStore will take in our reducers and create our storage object
const store = createStore(userReducer);

console.log("Initial State", store.getState());

store.subscribe(() => {
    console.log(store.getState());
});

// actions - descriptions of the changes that will take place in our application.
store.dispatch({ type: "BIRTHDAY", payload: { name: "Wilma Flintstone" } });