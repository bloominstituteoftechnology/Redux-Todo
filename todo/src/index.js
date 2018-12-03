import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import { createGlobalStyle } from "styled-components";
import VisibleTodo from "./containers/VisibleTodo";

const GlobalStyles = createGlobalStyle`
body {
  text-align: center;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

`;

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <div className="App">
          <VisibleTodo />
        </div>
      </>
    );
  }
}

ReactDOM.render(
  <Provider store={createStore(reducer)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
