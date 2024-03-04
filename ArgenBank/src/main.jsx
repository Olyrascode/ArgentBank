import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App.jsx"


//Redux//
import { Provider } from 'react-redux'
import {configureStore} from "@reduxjs/toolkit"
import rootReducer from "./reducers"

const persistedState = {
  auth: {
    token: localStorage.getItem("token") || sessionStorage.getItem("token"),
  },
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
  devTools: true,
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
