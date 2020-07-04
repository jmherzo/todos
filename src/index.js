import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./configureStore";
import Root from "./Components/Root";

const store = configureStore();
// Render
ReactDOM.render(<Root store={store} />, document.getElementById("root"));
