import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import EnhancedTodoList from './components/TodoList/TodoList'
import reducer from "./reducers";

import "./index.css";

class App extends React.Component {
	render() {
		return (
			<div className="App">
            
				<h1 className="main-header">Redux ToDo List</h1>
				<EnhancedTodoList />
			</div>
		);
	}
}

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const rootElement = document.getElementById("root");
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	rootElement
);
