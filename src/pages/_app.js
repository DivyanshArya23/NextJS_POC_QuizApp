import React from "react";
import "../assets/styles/index.global.scss";
import { Provider } from "react-redux";
import { ToastProvider } from "react-toast-notifications";
import store from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ToastProvider autoDismiss autoDismissTimeout={3000}>
        <Component {...pageProps} />
      </ToastProvider>
    </Provider>
  );
}

export default MyApp;
