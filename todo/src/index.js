import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import todosReducer from "./reducers/todosReducer";
import registerServiceWorker from "./registerServiceWorker";

const store = createStore(
	todosReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
registerServiceWorker();

// store.subscribe(() => {
// 	console.log(store.getState());
// });

// store.dispatch({
// 	type: "NEWTODO",
// 	payload: { text: "Ryan", isComplete: true }
// });

// store.dispatch({
// 	type: "TOGGLETODO",
// 	payload: { text: "Ryan", isComplete: true }
// });
