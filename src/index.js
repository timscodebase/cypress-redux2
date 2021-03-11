import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "todomvc-app-css/index.css";
import App from "./components/App";
import reducer from "./reducers";
import { loadState, saveState } from "./localStorage";

const store = createStore(reducer);
store.subscribe(() => {
  saveState({
    todos: store.getState().todos,
  });
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// expose store during tests
if (window.Cypress) {
  window.store = store;
}
