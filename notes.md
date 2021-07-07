#Redux Fundamentals

Redux 1

Finite State Machince and Publisher/Subscriber patterns
Redux
    Store
        inital State (closed door)
        register and notify listerners/subscribers of state changes
        get state 
        update state  
    reducers
    actions and action creators
React Bindings for Redux


what is redux 
Statement Management Library
    make state management

React   Redux
[UI] + [Data (State)]

data = store = applicationStore = {isLocked: true, isOpen: true}

Component = (optionalData) => UI. UI depends on optional data

Redux thinks in transitions 
FSM (Finite State Machine) think about your states first.

| current state | action (input) | new State |

|locked |- -> unlocked 
unlocked - -> locked

we want to share state across siblings: lift state up.










#Middleware

Component -> Action Creators -> Action -> Reducers -> State 



#Thunk