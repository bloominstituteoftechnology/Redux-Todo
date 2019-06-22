import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//Creating store
import { createStore } from "redux";

//Connecting redux with react
import { Provider } from "react-redux";

ReactDOM.render(<App />, document.getElementById("root"));
