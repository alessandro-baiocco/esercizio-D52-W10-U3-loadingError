import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import "bootstrap-icons/font/bootstrap-icons.css";
import { jobs, persistor } from "./redux/jobs";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={jobs}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
