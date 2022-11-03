import React from "react";
import Route from "./Route";
import ErrorBoundary from "./components/ErrorBoundary";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import * as Sentry from "@sentry/react";

function App() {
  return (
    <>
      <ErrorBoundary>
        <Provider store={store}>
          <BrowserRouter>
            <Route />
          </BrowserRouter>
        </Provider>
      </ErrorBoundary>
    </>
  );
}

export default Sentry.withProfiler(App);
