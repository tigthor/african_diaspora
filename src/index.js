import React from "react";
import ReactDOM from "react-dom";
import "./styles/style.scss";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import mainReducer from "./redux/reducers";

// Creating store
const store = createStore(
  mainReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("ad-root")
);
