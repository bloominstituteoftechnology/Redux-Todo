Q:
What is `Redux` and what problem does it solve?

A:
-Redux is a predictable state management library for React that give a project an architecture for managing states.
-Propdrilling and handling Data through components can get complex and error faulty fast in React so Redux makes this 
easier by outsourcing the state data of components into a central managed store.

Q:
What is Redux `store`?

A:
-The Redux store is the place where state data is held centrally for all connected components of the application.
-Store is immutable and only accessible by reducers.
-When the store data gets changed all connected and affected components rerender their data because they receive new Props.


Q:
What is the `connect()` function used for?

A:
-connect() is a Higher Order Component (HOC) that gives a component access to new functionalities.
-It takes the properties out of the mapStateToProps() function and provides these for the connected component as Props.


Q:
What is the purpose of a `Reducer`?

A:
-The Reducer is a function that accepts two objects as arguments (currentState, action) and reduces them into a single state
object that it returns.
-Through switch cases it gets decided which action gets applied to modifiy the state object.


Q:
What are the differences between `Action Creator`’s and an `Action`’s?

A:
Action Creator:
-A action Creator is a function that creates an action by returning an action object.
-Action Creators give Actions a type so the reducers can determine what kind of event happend and which state to alter.


Action:
-Action is a paket of info that describes as UI event.
-Actions are given to reducers to update the state tree.
