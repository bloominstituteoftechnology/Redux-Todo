import { createStore} from 'redux';

const initialState = {
    tasks: ["Run Faster", "Be Smarter", "Make More Money"],
};

const todoReducer = (state = initalState, action) => {
    return state;

}
const store = createStore(todoReducer);

store.subscribe(()=> {
    console.log(store.getState());
})

//dispatch takes an object that will have properties:
//type - description of change that took place
//payload - data that is changing in the state
store.dispatch({ type:  'ADD_TASK', payload: 'new task'});